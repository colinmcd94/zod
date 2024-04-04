// @ts-ignore TS6133
import { expect } from "https://deno.land/x/expect@v0.2.6/mod.ts";
const test = Deno.test;

import { util } from "../helpers/util.ts";
import * as z from "../index.ts";

test("branded types", () => {
  const mySchema = z
    .object({
      name: z.string(),
    })
    .brand<"superschema">();

  // simple branding
  type MySchema = z.infer<typeof mySchema>;
  util.assertEqual<
    MySchema,
    { name: string } & { [z.BRAND]: { superschema: true } }
  >(true);

  const doStuff = (arg: MySchema) => arg;
  doStuff(mySchema.parse({ name: "hello there" }));

  // inheritance
  const extendedSchema = mySchema.brand<"subschema">();
  type ExtendedSchema = z.infer<typeof extendedSchema>;
  util.assertEqual<
    ExtendedSchema,
    { name: string } & z.BRAND<"superschema"> & z.BRAND<"subschema">
  >(true);

  doStuff(extendedSchema.parse({ name: "hello again" }));

  // number branding
  const numberSchema = z.number().brand<42>();
  type NumberSchema = z.infer<typeof numberSchema>;
  util.assertEqual<NumberSchema, number & { [z.BRAND]: { 42: true } }>(true);

  // symbol branding
  const MyBrand: unique symbol = Symbol("hello");
  type MyBrand = typeof MyBrand;
  const symbolBrand = z.number().brand<"sup">().brand<typeof MyBrand>();
  type SymbolBrand = z.infer<typeof symbolBrand>;
  // number & { [z.BRAND]: { sup: true, [MyBrand]: true } }
  util.assertEqual<SymbolBrand, number & z.BRAND<"sup"> & z.BRAND<MyBrand>>(
    true
  );

  // keeping brands out of input types in non-strict mode
  const age = z.number().brand<"age", false>();

  type Age = z.infer<typeof age>;
  type AgeInput = z.input<typeof age>;

  util.assertEqual<AgeInput, Age>(false);
  util.assertEqual<number, AgeInput>(true);
  util.assertEqual<number & z.BRAND<"age">, Age>(true);

  // @ts-expect-error
  doStuff({ name: "hello there!" });

  // (default) strict mode - should be branded
  const height = z.number().brand("metricHeight");

  type Height = z.input<typeof height>;
  util.assertEqual<number & z.BRAND<"metricHeight">, Height>(true);
});
