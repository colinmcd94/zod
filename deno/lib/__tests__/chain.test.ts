// @ts-ignore TS6133
import { expect } from "https://deno.land/x/expect@v0.2.6/mod.ts";
const test = Deno.test;

import { util } from "../helpers/util.ts";
import * as z from "../index.ts";

test.each([
  {
    input: "1",
    output: {
      success: true,
      data: 1,
    },
  },
  {
    input: "",
    output: {
      success: false,
      error: expect.objectContaining({
        issues: [
          {
            code: "invalid_type",
            expected: "number",
            received: "nan",
            path: [],
            message: "Expected number, received nan",
          },
        ],
      }),
    },
  },
  {
    input: null,
    output: {
      success: false,
      error: expect.objectContaining({
        issues: [
          {
            code: "invalid_type",
            expected: "string",
            received: "null",
            path: [],
            message: "Expected string, received null",
          },
        ],
      }),
    },
  },
  {
    input: "5",
    output: {
      success: false,
      error: expect.objectContaining({
        issues: [
          {
            code: "custom",
            message: "Cannot be 5",
            path: ["new_path"],
          },
          {
            code: "custom",
            message: "It really can not be 5",
            path: ["newer_path"],
          },
        ],
      }),
    },
  },
  {
    input: "6",
    output: {
      success: false,
      error: expect.objectContaining({
        issues: [
          {
            code: "custom",
            message: "Cannot be 6",
            fatal: true,
            path: [],
          },
        ],
      }),
    },
  },
])('Schema chaining "$input"', ({ input, output }) => {
  const from = z
    .string()
    .transform((val) => parseInt(val, 10))
    .optional()
    .superRefine((val, ctx) => {
      if (val === 5) {
        ctx.addIssue({
          code: "custom",
          message: "Cannot be 5",
          path: ["new_path"],
        });
      }
      if (val === 6) {
        ctx.addIssue({
          code: "custom",
          message: "Cannot be 6",
          fatal: true,
        });
      }
    });
  const to = z
    .number()
    .min(1)
    .max(10)
    .nullable()
    .optional()
    .superRefine((val, ctx) => {
      if (val === 5) {
        ctx.addIssue({
          code: "custom",
          message: "It really can not be 5",
          path: ["newer_path"],
        });
      }
    })
    .refine((val) => val !== 6, { message: "It really can not be 6" });

  type FromInput = z.input<typeof from>;
  type FromOutput = z.output<typeof from>;

  type ToInput = z.input<typeof to>;
  type ToOutput = z.output<typeof to>;

  util.assertAssignable<ToInput, FromOutput>(true);

  const chain = z.chain(from, to);

  type ChainInput = z.input<typeof chain>;
  type ChainOutput = z.output<typeof chain>;

  util.assertEqual<ChainInput, FromInput>(true);
  util.assertEqual<ChainOutput, ToOutput>(true);

  const res = chain.safeParse(input);
  expect(res).toEqual(output);
});
