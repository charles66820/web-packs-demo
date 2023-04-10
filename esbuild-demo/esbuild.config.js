import * as esbuild from "esbuild";
import htmlPlugin from "@chialab/esbuild-plugin-html";

let ctx = await esbuild.build({
  entryPoints: ["src/index.html"],
  bundle: true,
  minify: true,
  outdir: "dist",
  plugins: [
    htmlPlugin(),
  ],
});
