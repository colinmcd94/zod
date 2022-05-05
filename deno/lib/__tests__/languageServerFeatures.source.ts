import * as z from "../index.ts";

export const Test = z.object({
  f1: z.number(),
});

export type Test = z.infer<typeof Test>;

export const instanceOfTest: Test = {
  f1: 1,
};

export const TestMerge = z
  .object({
    f2: z.string().optional(),
  })
  .merge(Test);

export type TestMerge = z.infer<typeof TestMerge>;

export const instanceOfTestMerge: TestMerge = {
  f1: 1,
  f2: "string",
};

export const TestUnion = z.union([
  z.object({
    f2: z.string().optional(),
  }),
  Test,
]);

export type TestUnion = z.infer<typeof TestUnion>;

export const instanceOfTestUnion: TestUnion = {
  f1: 1,
  f2: "string",
};

export const TestPartial = Test.partial();

export type TestPartial = z.infer<typeof TestPartial>;

export const instanceOfTestPartial: TestPartial = {
  f1: 1,
};

export const filePath = __filename;
