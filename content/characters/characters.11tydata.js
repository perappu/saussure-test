export default {
	layout: "character.njk",
	permalink: function ({ page }) {
		return `/characters/${page.fileSlug}/`;
	},
};
