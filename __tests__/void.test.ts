// @ts-ignore TS6133
import { expect, test } from "@jest/globals";

import { util } from "../src/helpers/util";
import * as z from "../src/index";
test("void", () => {
  const v = z.void();
  v.parse(undefined);

  expect(() => v.parse(null)).toThrow();
  expect(() => v.parse("")).toThrow();

  type v = z.infer<typeof v>;
  util.assertEqual<v, void>(true);
});