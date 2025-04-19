export default {
	layout: "literature.njk",
	permalink: function ({ title }) {
		return `/literatures/${this.slugify(title)}/`;
	},
};
