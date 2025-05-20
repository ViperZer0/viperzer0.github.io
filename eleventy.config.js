import graphVizPlugin from "../eleventy-plugin-graphviz/dist/index.js";

export default async function(eleventyConfig) {
  eleventyConfig.addPlugin(graphVizPlugin, { format: "svg" });
  // Copy bundle.css to output directory
  eleventyConfig.addPassthroughCopy({"src/_includes/bundle.css": "bundle.css"});
};


export const config = {
  dir: {
    // Input directory to pull files from
    input: "src",
  }
}
