import * as esbuild from "esbuild";
import htmlPlugin from "@chialab/esbuild-plugin-html";

let ctx = await esbuild.context({
  entryPoints: ["src/index.html"],
  bundle: true,
  sourcemap: true,
  outdir: "www",
  plugins: [
    htmlPlugin(),
  ],
});

let { host, port } = ctx.serve({
  servedir: "www",
});
