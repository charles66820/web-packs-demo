import * as esbuild from "esbuild";
import htmlPlugin from "@chialab/esbuild-plugin-html";
import {sassPlugin} from 'esbuild-sass-plugin'
import imageInline from 'esbuild-plugin-inline-image'

let ctx = await esbuild.build({
  entryPoints: ["src/index.html"],
  bundle: true,
  minify: true,
  outdir: "dist",
  plugins: [
    htmlPlugin(),
    sassPlugin(),
    imageInline()
  ],
});
