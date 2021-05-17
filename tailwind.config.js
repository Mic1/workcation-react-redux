const colors = require("tailwindcss/colors");
module.exports = {
	mode: "aot",
	purge: {
		mode: "layers",
		content: [
			"src/**/*.js",
			"src/**/*.jsx",
			"src/**/*.ts",
			"src/**/*.tsx",
			"public/**/*.html",
		],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			padding: {
				"5/6": "83.3333333%",
			},
			colors: {
				teal: colors.teal,
			},
		},
		customForms: (theme) => ({
			default: {
				// checkedColor: theme("colors.red.500"),
				input: {
					borderRadius: theme("borderRadius.lg"),
					backgroundColor: theme("colors.gray.200"),
					"&:focus": {
						backgroundColor: theme("colors.white"),
					},
				},
				select: {
					borderRadius: theme("borderRadius.lg"),
					// boxShadow: theme("boxShadow.default"),
					backgroundColor: theme("colors.gray.600"),
					borderColor: "transparent",
					iconColor: theme("colors.white", colors.white),
					lineHeight: theme("lineHeight.snug"),
					"&:focus": { backgroundColor: theme("colors.gray.200") },
				},
				radio: {
					height: theme("spacing.6"),
					width: theme("spacing.6"),
					backgroundColor: theme("colors.gray.900"),
					"&:checked": { backgroundColor: theme("colors.indigo.500") },
					"&:focus": { backgroundColor: theme("colors.gray.700") },
				},
				checkbox: {
					height: theme("spacing.6"),
					width: theme("spacing.6"),
					backgroundColor: theme("colors.gray.900"),
					checkboxSize: "1.5em",
					borderRadius: theme("borderRadius.lg"),
					"&:checked": { backgroundColor: theme("colors.indigo.500") },
					"&:focus": { backgroundColor: theme("colors.gray.600") },
					// checked: theme("colors.red.500"),
					// width: theme("spacing.6"),
					// height: theme("spacing.6"),
				},
			},
		}),
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/custom-forms")],
};
