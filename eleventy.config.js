import graphVizPlugin from "../eleventy-plugin-graphviz/dist/index.js";

export default async function(eleventyConfig) {
  console.log(JSON.stringify(graphVizPlugin));
  eleventyConfig.addPlugin(graphVizPlugin, { format: "png" });
};

export const config = {
  dir: {
    // Input directory to pull files from
    input: "src",
  }
}
