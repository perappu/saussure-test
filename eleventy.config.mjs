import markdownit from "markdown-it"
import anchor from "markdown-it-anchor"

export default async function(eleventyConfig) {

    eleventyConfig.setLibrary("md", markdownit({ html: true }).use(anchor));

    eleventyConfig.addCollection("characters", function (collectionApi) {
		return collectionApi.getFilteredByGlob("content/characters/*.md")
			.sort((a, b) => b.data.name - a.data.name);
	  });

    eleventyConfig.addCollection("images", function (collectionApi) {
      return collectionApi.getFilteredByGlob("content/images/*.md")
        .sort((a, b) => b.data.title - a.data.title);
      });

    eleventyConfig.addCollection("literatures", function (collectionApi) {
      return collectionApi.getFilteredByGlob("content/literatures/*.md")
        .sort((a, b) => b.data.title - a.data.title);
      });
  
      eleventyConfig.addFilter('byCharacter', function(collection, character) {
        if (!character) return collection;
          const filtered = collection.filter(item => item.data.character == character).sort((a, b) => {
            if (a.data.title < b.data.title) return -1;
            else if (a.data.title > b.data.title) return 1;
            else return 0;
          })
          return filtered;
      });

    eleventyConfig.setLayoutsDirectory("_includes/layouts");

    eleventyConfig.addPassthroughCopy({ "static": "/" });
}