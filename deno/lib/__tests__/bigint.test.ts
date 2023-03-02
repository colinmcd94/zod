// @ts-ignore TS6133
import { expect } from "https://deno.land/x/expect@v0.2.6/mod.ts";
const test = Deno.test;

import * as z from "../index.ts";

const gtFive = z.bigint().gt(BigInt(5));
const gteFive = z.bigint().gte(BigInt(5));
const ltFive = z.bigint().lt(BigInt(5));
const lteFive = z.bigint().lte(BigInt(5));
const positive = z.bigint().positive();
const negative = z.bigint().negative();
const nonnegative = z.bigint().nonnegative();
const nonpositive = z.bigint().nonpositive();
const multipleOfFive = z.bigint().multipleOf(BigInt(5));
const unsafe = z.bigint().unsafe();
const safe = z.bigint().safe();

test("passing validations", () => {
  z.bigint().parse(BigInt(1));
  z.bigint().parse(BigInt(0));
  z.bigint().parse(BigInt(-1));
  gtFive.parse(BigInt(6));
  gteFive.parse(BigInt(5));
  gteFive.parse(BigInt(6));
  ltFive.parse(BigInt(4));
  lteFive.parse(BigInt(5));
  lteFive.parse(BigInt(4));
  positive.parse(BigInt(3));
  negative.parse(BigInt(-2));
  nonnegative.parse(BigInt(0));
  nonnegative.parse(BigInt(7));
  nonpositive.parse(BigInt(0));
  nonpositive.parse(BigInt(-12));
  multipleOfFive.parse(BigInt(15));
  unsafe.parse(BigInt(Number.MAX_SAFE_INTEGER) + BigInt(1));
  unsafe.parse(BigInt(Number.MIN_SAFE_INTEGER) - BigInt(1));
  safe.parse(BigInt(Number.MAX_SAFE_INTEGER));
  safe.parse(BigInt(0));
  safe.parse(BigInt(Number.MIN_SAFE_INTEGER));
});

test("failing validations", () => {
  expect(() => gtFive.parse(BigInt(5))).toThrow();
  expect(() => gteFive.parse(BigInt(4))).toThrow();
  expect(() => ltFive.parse(BigInt(5))).toThrow();
  expect(() => lteFive.parse(BigInt(6))).toThrow();
  expect(() => positive.parse(BigInt(0))).toThrow();
  expect(() => positive.parse(BigInt(-2))).toThrow();
  expect(() => negative.parse(BigInt(0))).toThrow();
  expect(() => negative.parse(BigInt(3))).toThrow();
  expect(() => nonnegative.parse(BigInt(-1))).toThrow();
  expect(() => nonpositive.parse(BigInt(1))).toThrow();
  expect(() => multipleOfFive.parse(BigInt(13))).toThrow();
  expect(() => unsafe.parse(BigInt(Number.MAX_SAFE_INTEGER))).toThrow();
  expect(() => unsafe.parse(BigInt(Number.MIN_SAFE_INTEGER))).toThrow();
  expect(() =>
    safe.parse(BigInt(Number.MAX_SAFE_INTEGER) + BigInt(1))
  ).toThrow();
  expect(() =>
    safe.parse(BigInt(Number.MIN_SAFE_INTEGER) - BigInt(1))
  ).toThrow();
});

test("min max getters", () => {
  expect(z.bigint().min(BigInt(5)).minValue).toEqual(BigInt(5));
  expect(z.bigint().min(BigInt(5)).min(BigInt(10)).minValue).toEqual(
    BigInt(10)
  );
  expect(z.bigint().safe().minValue).toEqual(BigInt(Number.MIN_SAFE_INTEGER));
  expect(z.bigint().safe().min(BigInt(5)).minValue).toEqual(BigInt(5));

  expect(z.bigint().max(BigInt(5)).maxValue).toEqual(BigInt(5));
  expect(z.bigint().max(BigInt(5)).max(BigInt(1)).maxValue).toEqual(BigInt(1));
  expect(z.bigint().safe().maxValue).toEqual(BigInt(Number.MAX_SAFE_INTEGER));
  expect(z.bigint().safe().max(BigInt(5)).maxValue).toEqual(BigInt(5));
});

test("safe unsafe getters", () => {
  expect(z.bigint().unsafe().isUnsafe).toEqual(true);
  expect(z.bigint().unsafe().isSafe).toEqual(false);
  expect(z.bigint().min(BigInt(5)).isUnsafe).toEqual(true);
  expect(z.bigint().min(BigInt(5)).isSafe).toEqual(false);
  expect(z.bigint().max(BigInt(5)).isUnsafe).toEqual(true);
  expect(z.bigint().max(BigInt(5)).isSafe).toEqual(false);

  expect(z.bigint().safe().isSafe).toEqual(true);
  expect(z.bigint().safe().isUnsafe).toEqual(false);
  expect(z.bigint().min(BigInt(5)).max(BigInt(10)).isSafe).toEqual(true);
  expect(z.bigint().min(BigInt(5)).max(BigInt(10)).isUnsafe).toEqual(false);
});
