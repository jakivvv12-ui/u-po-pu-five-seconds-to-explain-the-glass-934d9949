import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "Glass is sand with a glow-up: melted clear, shaped thin, and trusted to hold your drink while pretending it isn't fragile.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), `${entry}\n`, "utf8");
