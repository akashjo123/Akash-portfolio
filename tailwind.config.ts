import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F4F2ED",
        ink: "#171717",
        "ink-muted": "#77746D",
        surface: "#EAE8E1",
        hairline: "#D9D6CE",
        accent: {
          DEFAULT: "#A8B7A3",
          hover: "#97a892",
          dark: "#687a63",
          light: "#d5ded3",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "Neue Montreal",
          "General Sans",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
        serif: [
          "Playfair Display",
          "Didot",
          "Bodoni MT",
          "Cinzel",
          "Baskerville",
          "Georgia",
          "serif",
        ],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
        tight: "-0.015em",
        wide: "0.05em",
        wider: "0.1em",
        widest: "0.18em",
      },
    },
  },
  plugins: [],
};

export default config;
