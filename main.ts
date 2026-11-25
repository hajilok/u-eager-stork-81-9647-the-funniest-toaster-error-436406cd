import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MESSAGE: string = "ERR 02: Cannot lock lever while being watched.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), MESSAGE, "utf8");
