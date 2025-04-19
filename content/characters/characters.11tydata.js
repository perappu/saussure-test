export default {
	layout: "character.njk",
	permalink: function ({ name }) {
		return `/characters/${this.slugify(name)}/`;
	},
};
