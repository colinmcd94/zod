// @ts-ignore TS6133
import { afterEach, beforeEach, expect, test } from "@jest/globals";
import { File as WebFile } from "@web-std/file";

import * as z from "../index";

const minCheck = z.file().min(5);
const maxCheck = z.file().max(8);
const acceptCheck = z.file().accept([".txt", "text/plain"]);
const filenameCheck = z.file().filename(z.string().regex(/^[xy]+$/));

const originalFile = global.File;
beforeEach(async () => {
  if (!globalThis.File) globalThis.File = WebFile;
});
afterEach(() => {
  if (globalThis.File !== originalFile) {
    globalThis.File = originalFile;
  }
});

test("passing validations", () => {
  minCheck.parse(new File(["12345"], "test.txt"));
  maxCheck.parse(new File(["12345678"], "test.txt"));

  acceptCheck.parse(new File([""], "test.txt"));
  acceptCheck.parse(new File([""], "test.csv", { type: "text/plain" }));
  acceptCheck.parse(new File([""], "test.txt", { type: "text/csv" }));

  filenameCheck.parse(new File([""], "xxy"));
});

test("failing validations", () => {
  expect(() => minCheck.parse(new File(["1234"], "test.txt"))).toThrow();
  expect(() => maxCheck.parse(new File(["123456789"], "test.txt"))).toThrow();

  expect(() => acceptCheck.parse(new File([""], "test.csv"))).toThrow();
  expect(() =>
    acceptCheck.parse(new File([""], "test.csv", { type: "text/csv" }))
  ).toThrow();

  expect(() => filenameCheck.parse(new File([""], "ax"))).toThrow();
});

test("min max getters", () => {
  expect(minCheck.minSize).toEqual(5);
  expect(minCheck.min(10).minSize).toEqual(10);

  expect(maxCheck.maxSize).toEqual(8);
  expect(maxCheck.max(6).maxSize).toEqual(6);
});

test("accept getter", () => {
  expect(acceptCheck.accepts).toEqual([".txt", "text/plain"]);
  expect(acceptCheck.accept([".txt", ".csv"]).accepts).toEqual([".txt"]);
});
