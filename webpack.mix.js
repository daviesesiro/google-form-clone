// const cssImport = require("postcss-import");
const cssNesting = require("postcss-nesting");
const mix = require("laravel-mix");
const path = require("path");
const purgecss = require("@fullhuman/postcss-purgecss");
const tailwindcss = require("tailwindcss");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .browserSync("127.0.0.1:8000")
  .react("resources/js/app.js", "public/js")
  .postCss("resources/css/app.css", "public/css/app.css")
  .options({
    postCss: [
      cssNesting(),
      tailwindcss("tailwind.config.js"),
      ...(mix.inProduction()
        ? [
            purgecss({
              content: [
                "./resources/views/**/*.blade.php",
                "./resources/js/**/*.js"
              ],
              defaultExtractor: content =>
                content.match(/[\w-/:.]+(?<!:)/g) || [],
              whitelistPatternsChildren: [/nprogress/]
            })
          ]
        : [])
    ]
  })
  .webpackConfig({
    output: { chunkFilename: "js/[name].js?id=[chunkhash]" },
    resolve: {
      alias: {
        "@": path.resolve("resources/js")
      }
    }
  })
  .version()
  .sourceMaps();
