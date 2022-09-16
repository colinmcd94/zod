// @ts-ignore TS6133
import { expect } from "https://deno.land/x/expect@v0.2.6/mod.ts";
const test = Deno.test;

import { util } from "../helpers/util.ts";
import * as z from "../index.ts";

test("schema chaining", () => {
  const from = z.string().transform((val) => parseInt(val, 10));
  const to = z.number().min(1).max(10).nullable();

  type FromOutput = z.output<typeof from>;
  type ToInput = z.input<typeof to>;

  util.assertAssignable<ToInput, FromOutput>(true);

  const chain = z.chain(from, to);

  type ChainInput = z.input<typeof chain>;
  type ChainOutput = z.output<typeof chain>;

  util.assertEqual<ChainInput, string>(true);
  util.assertEqual<ChainOutput, number | null>(true);
});
