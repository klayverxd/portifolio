import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			fontFamily: {
				lexend: ["var(--font-koulen-regular)", "sans-serif"],
				koulen: ["var(--font-koulen-regular)", "sans-serif"],
				geistSans: ["var(--font-geist-sans)", "sans-serif"],
				geistMono: ["var(--font-geist-mono)", "monospace"],
			},
			fontSize: {
				sm: "0.8rem",
				base: "1rem",
				xl: "1.25rem",
				"5xl": "3.052rem",
			},
		},
	},
	plugins: [],
} satisfies Config;
