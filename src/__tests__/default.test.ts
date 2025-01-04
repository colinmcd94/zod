// @ts-ignore TS6133
import { expect, test } from "@jest/globals";

import { z } from "..";
import { util } from "../helpers/util";

test("basic defaults", () => {
  expect(z.string().default("default").parse(undefined)).toBe("default");
});

test("default with transform", () => {
  const stringWithDefault = z
    .string()
    .transform((val) => val.toUpperCase())
    .default("default");
  expect(stringWithDefault.parse(undefined)).toBe("DEFAULT");
  expect(stringWithDefault).toBeInstanceOf(z.ZodDefault);
  expect(stringWithDefault._def.innerType).toBeInstanceOf(z.ZodEffects);
  expect(stringWithDefault._def.innerType._def.schema).toBeInstanceOf(
    z.ZodSchema
  );

  type inp = z.input<typeof stringWithDefault>;
  util.assertEqual<inp, string | undefined>(true);
  type out = z.output<typeof stringWithDefault>;
  util.assertEqual<out, string>(true);
});

test("default after transform that returns undefined", () => {
  const schema = z
    .union([
      z.literal("").transform(() => undefined),
      z.string().toUpperCase().optional(),
    ])
    .default("default");

  expect(schema.parse(undefined)).toBe("DEFAULT");
  expect(schema.parse("foo")).toBe("FOO");
  expect(schema.parse("")).toBe("DEFAULT");

  type inp = z.input<typeof schema>;
  util.assertEqual<inp, string | undefined>(true);
  type out = z.output<typeof schema>;
  util.assertEqual<out, string>(true);
});

test("default when transform returns undefined on default value", () => {
  const schema = z
    .union([
      z.enum(["", "default"]).transform(() => undefined),
      z.string().optional(),
    ])
    .default("default");

  expect(() => schema.parse(undefined)).toThrow(
    "default value parsed to undefined"
  );
  expect(schema.parse("foo")).toBe("foo");
  expect(() => schema.parse("")).toThrowError(
    "default value parsed to undefined"
  );

  type inp = z.input<typeof schema>;
  util.assertEqual<inp, string | undefined>(true);
  type out = z.output<typeof schema>;
  util.assertEqual<out, string>(true);
});

test("default after async transform that returns undefined", async () => {
  const schema = z
    .union([
      z.literal("").transform(async () => undefined),
      z.string().optional(),
    ])
    .default("default");

  expect(await schema.parseAsync(undefined)).toBe("default");
  expect(await schema.parseAsync("foo")).toBe("foo");
  expect(await schema.parseAsync("")).toBe("default");

  type inp = z.input<typeof schema>;
  util.assertEqual<inp, string | undefined>(true);
  type out = z.output<typeof schema>;
  util.assertEqual<out, string>(true);
});

test("default on existing optional", () => {
  const stringWithDefault = z.string().optional().default("asdf");
  expect(stringWithDefault.parse(undefined)).toBe("asdf");
  expect(stringWithDefault).toBeInstanceOf(z.ZodDefault);
  expect(stringWithDefault._def.innerType).toBeInstanceOf(z.ZodOptional);
  expect(stringWithDefault._def.innerType._def.innerType).toBeInstanceOf(
    z.ZodString
  );

  type inp = z.input<typeof stringWithDefault>;
  util.assertEqual<inp, string | undefined>(true);
  type out = z.output<typeof stringWithDefault>;
  util.assertEqual<out, string>(true);
});

test("optional on default", () => {
  const stringWithDefault = z.string().default("asdf").optional();

  type inp = z.input<typeof stringWithDefault>;
  util.assertEqual<inp, string | undefined>(true);
  type out = z.output<typeof stringWithDefault>;
  util.assertEqual<out, string | undefined>(true);
});

test("complex chain example", () => {
  const complex = z
    .string()
    .default("asdf")
    .transform((val) => val.toUpperCase())
    .default("qwer")
    .removeDefault()
    .optional()
    .default("asdfasdf");

  expect(complex.parse(undefined)).toBe("ASDFASDF");
});

test("removeDefault", () => {
  const stringWithRemovedDefault = z.string().default("asdf").removeDefault();

  type out = z.output<typeof stringWithRemovedDefault>;
  util.assertEqual<out, string>(true);
});

test("nested", () => {
  const inner = z.string().default("asdf");
  const outer = z.object({ inner }).default({
    inner: undefined,
  });
  type input = z.input<typeof outer>;
  util.assertEqual<input, { inner?: string | undefined } | undefined>(true);
  type out = z.output<typeof outer>;
  util.assertEqual<out, { inner: string }>(true);
  expect(outer.parse(undefined)).toEqual({ inner: "asdf" });
  expect(outer.parse({})).toEqual({ inner: "asdf" });
  expect(outer.parse({ inner: undefined })).toEqual({ inner: "asdf" });
});

test("chained defaults", () => {
  const stringWithDefault = z.string().default("inner").default("outer");
  const result = stringWithDefault.parse(undefined);
  expect(result).toEqual("outer");
});

test("factory", () => {
  expect(
    z.ZodDefault.create(z.string(), { default: "asdf" }).parse(undefined)
  ).toEqual("asdf");
});

test("native enum", () => {
  enum Fruits {
    apple = "apple",
    orange = "orange",
  }

  const schema = z.object({
    fruit: z.nativeEnum(Fruits).default(Fruits.apple),
  });

  expect(schema.parse({})).toEqual({ fruit: Fruits.apple });
});

test("enum", () => {
  const schema = z.object({
    fruit: z.enum(["apple", "orange"]).default("apple"),
  });

  expect(schema.parse({})).toEqual({ fruit: "apple" });
});
