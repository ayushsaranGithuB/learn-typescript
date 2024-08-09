const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

const shikiTwoslash = require("eleventy-plugin-shiki-twoslash");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("public");

  eleventyConfig.addPlugin(shikiTwoslash, { theme: "vitesse-dark" });

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Let Eleventy transform HTML files as nunjucks
  // So that we can use .html instead of .njk
  return {
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "liquid",
  };
};
