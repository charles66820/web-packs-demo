import * as esbuild from "esbuild";
import htmlPlugin from "@chialab/esbuild-plugin-html";
import {sassPlugin} from 'esbuild-sass-plugin'
import imageInline from 'esbuild-plugin-inline-image'

let ctx = await esbuild.context({
  entryPoints: ["src/index.html"],
  bundle: true,
  sourcemap: true,
  outdir: "www",
  plugins: [
    htmlPlugin(),
    sassPlugin(),
    imageInline()
  ],
});

let { host, port } = ctx.serve({
  servedir: "www",
});
