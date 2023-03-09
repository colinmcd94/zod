// @ts-ignore TS6133
import { expect } from "https://deno.land/x/expect@v0.2.6/mod.ts";
const test = Deno.test;

import { util } from "../helpers/util.ts";
import * as z from "../index.ts";

test("create enum", () => {
  const MyEnum = z.enum(["Red", "Green", "Blue"]);
  expect(MyEnum.Values.Red).toEqual("Red");
  expect(MyEnum.Enum.Red).toEqual("Red");
  expect(MyEnum.enum.Red).toEqual("Red");
});

test("infer enum", () => {
  const MyEnum = z.enum(["Red", "Green", "Blue"]);
  type MyEnum = z.infer<typeof MyEnum>;
  util.assertEqual<MyEnum, "Red" | "Green" | "Blue">(true);
});

test("get options", () => {
  expect(z.enum(["tuna", "trout"]).options).toEqual(["tuna", "trout"]);
});

test("readonly enum", () => {
  const HTTP_SUCCESS = ["200", "201"] as const;
  const arg = z.enum(HTTP_SUCCESS);
  type arg = z.infer<typeof arg>;
  util.assertEqual<arg, "200" | "201">(true);

  arg.parse("201");
  expect(() => arg.parse("202")).toThrow();
});

test("error params", () => {
  const result = z
    .enum(["test"], { required_error: "REQUIRED" })
    .safeParse(undefined);
  expect(result.success).toEqual(false);
  if (!result.success) {
    expect(result.error.issues[0].message).toEqual("REQUIRED");
  }
});

test("extract/exclude", () => {
  const foods = ["Pasta", "Pizza", "Tacos", "Burgers", "Salad"] as const;
  const FoodEnum = z.enum(foods);
  const ItalianEnum = FoodEnum.extract(["Pasta", "Pizza"]);
  const UnhealthyEnum = FoodEnum.exclude(["Salad"]);
  const EmptyFoodEnum = FoodEnum.exclude(foods);

  util.assertEqual<z.infer<typeof ItalianEnum>, "Pasta" | "Pizza">(true);
  util.assertEqual<
    z.infer<typeof UnhealthyEnum>,
    "Pasta" | "Pizza" | "Tacos" | "Burgers"
  >(true);
  // @ts-expect-error TS2344
  util.assertEqual<typeof EmptyFoodEnum, z.ZodEnum<[]>>(true);
  util.assertEqual<z.infer<typeof EmptyFoodEnum>, never>(true);
});

test("variadic extract/exclude", () => {
  const NumbersEnum = z.enum(["One", "Two", "Three"]);

  expect(NumbersEnum.extract("One", "Two").options).toEqual(
    z.enum(["One", "Two"]).options
  );
  expect(NumbersEnum.exclude("One", "Two").options).toEqual(
    z.enum(["Three"]).options
  );
});
