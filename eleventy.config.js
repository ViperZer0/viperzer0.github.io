import graphVizPlugin from "../eleventy-plugin-graphviz/dist/index.js";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import markdownItCallouts from "markdown-it-callouts";

export default async function(eleventyConfig) {
  eleventyConfig.addPlugin(graphVizPlugin, { format: "svg" });
  eleventyConfig.addPlugin(syntaxHighlight);
  // Add callout parsing
  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItCallouts, {
    calloutTitleElementType: "div",
    calloutSymbolElementType: "div",
    calloutSymbols: {
      info: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.5em" height="1.5em"><path fill="currentColor" d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8"/></svg>'
    }
  }));


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
