// @ts-ignore TS6133
import { expect } from "https://deno.land/x/expect@v0.2.6/mod.ts";
const test = Deno.test;

import { util } from "../helpers/util.ts";
import * as z from "../index.ts";

const minTwo = z.string().array().min(2);
const maxTwo = z.string().array().max(2);
const justTwo = z.string().array().length(2);
const intNum = z.string().array().nonempty();
const nonEmptyMax = z.string().array().nonempty().max(2);
const uniq = z.any().array().uniq();
const uniqDeep = z.any().array().uniqDeep();
const uniqBy = z
  .array(z.object({ id: z.string() }).partial())
  .uniqBy((elem) => elem.id);
const uniqWith = z
  .array(z.object({ id: z.string() }).partial())
  .uniqWith((a, b) => a.id === b.id);

type t1 = z.infer<typeof nonEmptyMax>;
util.assertEqual<[string, ...string[]], t1>(true);

type t2 = z.infer<typeof minTwo>;
util.assertEqual<string[], t2>(true);

test("passing validations", () => {
  minTwo.parse(["a", "a"]);
  minTwo.parse(["a", "a", "a"]);
  maxTwo.parse(["a", "a"]);
  maxTwo.parse(["a"]);
  justTwo.parse(["a", "a"]);
  intNum.parse(["a"]);
  nonEmptyMax.parse(["a"]);
  uniq.parse(["a", "b", "c"]);
  uniq.uniq(false).parse(["a", "b", "c", "a"]);
  uniqDeep.parse([{ a: "a" }, { b: "b" }, { c: "c" }]);
  uniqDeep
    .uniqDeep(false)
    .parse([{ a: "a" }, { b: "b" }, { c: "c" }, { a: "a" }]);
  uniq.parse([{ a: "a" }, { b: "b" }, { c: "c" }, { a: "a" }]);
  expect(() =>
    uniqBy.parse([
      { id: "a", a: "a" },
      { id: "b", b: "b" },
      { id: "c", c: "c" },
    ])
  );
  expect(() =>
    uniqWith.parse([
      { id: "a", a: "a" },
      { id: "b", b: "b" },
      { id: "c", c: "c" },
    ])
  );
});

test("failing validations", () => {
  expect(() => minTwo.parse(["a"])).toThrow();
  expect(() => maxTwo.parse(["a", "a", "a"])).toThrow();
  expect(() => justTwo.parse(["a"])).toThrow();
  expect(() => justTwo.parse(["a", "a", "a"])).toThrow();
  expect(() => intNum.parse([])).toThrow();
  expect(() => nonEmptyMax.parse([])).toThrow();
  expect(() => nonEmptyMax.parse(["a", "a", "a"])).toThrow();
  expect(() => uniq.parse(["a", "b", "c", "a"])).toThrow();
  expect(() =>
    uniqDeep.parse([{ a: "a" }, { b: "b" }, { c: "c" }, { a: "a" }])
  ).toThrow();
  expect(() =>
    uniqBy.parse([
      { id: "a", a: "a" },
      { id: "b", b: "b" },
      { id: "c", c: "c" },
      { id: "a", d: "d" },
    ])
  ).toThrow();
  expect(() =>
    uniqWith.parse([
      { id: "a", a: "a" },
      { id: "b", b: "b" },
      { id: "c", c: "c" },
      { id: "a", d: "d" },
    ])
  ).toThrow();
});

test("parse empty array in nonempty", () => {
  expect(() =>
    z
      .array(z.string())
      .nonempty()
      .parse([] as any)
  ).toThrow();
});

test("get element", () => {
  justTwo.element.parse("asdf");
  expect(() => justTwo.element.parse(12)).toThrow();
});

test("continue parsing despite array size error", () => {
  const schema = z.object({
    people: z.string().array().min(2),
  });

  const result = schema.safeParse({
    people: [123],
  });
  expect(result.success).toEqual(false);
  if (!result.success) {
    expect(result.error.issues.length).toEqual(2);
  }
});
