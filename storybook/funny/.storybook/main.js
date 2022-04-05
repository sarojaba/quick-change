module.exports = {
  "stories": [
    "../../stories/introduction/getting-started.stories.mdx",
    "../../stories/introduction/design-systems.stories.mdx",
    // "../../stories/examples/signin.stories.mdx",
    // "../../stories/examples/pricing.stories.mdx",
    // "../../stories/examples/gallery.stories.mdx",
    "../../stories/tokens/*.stories.mdx",
    "../../stories/components/*.stories.mdx",
    "../../stories/forms/*.stories.mdx",
    "../../stories/layout/*.stories.mdx",
    "../../stories/navigation/*.stories.mdx",
    // "../../stories/**/*.stories.mdx",
    // "../../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-turbo-build"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  typescript: {
		check: false,
	},
  features: {
    storyStoreV7: true
  }
}