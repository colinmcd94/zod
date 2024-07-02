import { makeData, makeSchema } from "./benchUtil";
import { metabench } from "./metabench";
const { zod3, zod4 } = makeSchema((z) =>
  z.object({
    string: z.string(),
    boolean: z.boolean(),
    number: z.number(),
  })
);

// biome-ignore lint/style/noVar: <explanation>
// biome-ignore lint/correctness/noInnerDeclarations: <explanation>
var DATA: any[] = makeData(1000, () => {
  return Object.freeze({
    number: Math.random(),
    string: `${Math.random()}`,
    boolean: Math.random() > 0.5,
  });
});

const bench = metabench("small: z.object().safeParse", {
  zod3() {
    for (const _ of DATA) zod3.safeParse(_);
  },
  zod4() {
    for (const _ of DATA) zod4.safeParse(_);
  },
});

export default async function run(): Promise<void> {
  await bench.run();
}

if (require.main === module) run();
