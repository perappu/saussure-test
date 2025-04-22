export default {
	layout: "literature.njk",
	permalink: function ({ page }) {
		return `/literatures/${page.fileSlug}/`;
	},
};
