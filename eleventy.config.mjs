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

    eleventyConfig.setLayoutsDirectory("_includes/layouts");
}