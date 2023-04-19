// @ts-ignore TS6133
import { expect } from "https://deno.land/x/expect@v0.2.6/mod.ts";
const test = Deno.test;

import * as z from "../index.ts";

const isPii = Symbol("isPii");
const annotations = { [isPii]: true, foo: "bar" };

test("passing `annotations` to schema should add annotations", () => {
  expect(z.string({ annotations }).annotations).toEqual(annotations);
  expect(z.number({ annotations }).annotations).toEqual(annotations);
  expect(z.boolean({ annotations }).annotations).toEqual(annotations);
});

test("`.annotate` should add an annotations", () => {
  expect(z.string().annotate({[isPii]: true, foo: "bar"}).annotations).toEqual(annotations);
  expect(z.number().annotate({[isPii]: true, foo: "bar"}).annotations).toEqual(annotations);
  expect(z.boolean().annotate({[isPii]: true, foo: "bar"}).annotations).toEqual(annotations);
});

test("annotations should carry over to chained schemas", () => {
  const schema = z.string({ annotations });
  expect(schema.annotations).toEqual(annotations);
  expect(schema.optional().annotations).toEqual(annotations);
  expect(schema.optional().nullable().default("default").annotations).toEqual(
    annotations
  );
});
