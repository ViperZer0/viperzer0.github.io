import graphVizPlugin from "eleventy-plugin-graphviz";

export default async function(eleventyConfig) {
  eleventyConfig.addPlugin(graphVizPlugin, { format: "png" });
};

export const config = {
  dir: {
    // Input directory to pull files from
    input: "src",
  }
}
