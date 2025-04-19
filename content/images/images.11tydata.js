export default {
	layout: "image.njk",
	permalink: function ({ title }) {
		return `/images/${this.slugify(title)}/`;
	},
};
