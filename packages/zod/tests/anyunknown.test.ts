// @ts-ignore TS6133
import { expect, test } from "vitest";
import * as core from "zod-core";
import * as z from "../src/index.js";

test("check any inference", () => {
  const t1 = z.any();
  t1.optional();
  t1.nullable();
  type t1 = z.infer<typeof t1>;
  core.assertEqual<t1, any>(true);
});

test("check unknown inference", () => {
  const t1 = z.unknown();
  t1.optional();
  t1.nullable();
  type t1 = z.infer<typeof t1>;
  core.assertEqual<t1, unknown>(true);
});

test("check never inference", () => {
  const t1 = z.never();
  expect(() => t1.parse(undefined)).toThrow();
  expect(() => t1.parse("asdf")).toThrow();
  expect(() => t1.parse(null)).toThrow();
});