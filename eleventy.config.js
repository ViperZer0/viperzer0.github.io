import graphVizPlugin from "../eleventy-plugin-graphviz/dist/index.js";

export default async function(eleventyConfig) {
  eleventyConfig.addPlugin(graphVizPlugin, { format: "svg" });
  // Copy bundle.css to output directory
  eleventyConfig.addPassthroughCopy({"src/_includes/bundle.css": "bundle.css"});
  // Add sorted posts collection
  eleventyConfig.addCollection("sortedPosts", function (collectionsApi) {
    return collectionsApi.getFilteredByTag("post").sort((a, b) => b.data.index - a.data.index);
  });
};


export const config = {
  dir: {
    // Input directory to pull files from
    input: "src",
  }
}
