import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "cover1-semibold": [
        "6rem",
        {
          lineHeight: "100%",
          fontWeight: "600",
        },
      ],
      "cover2-semibold": [
        "4rem",
        {
          lineHeight: "100%",
          fontWeight: "600",
        },
      ],
      "cover3-semibold": [
        "3.4rem",
        {
          lineHeight: "110%",
          fontWeight: "600",
        },
      ],
      "cover4-semibold": [
        "2.75rem",
        {
          lineHeight: "110%",
          fontWeight: "600",
        },
      ],
      "heading1-bold": [
        "2.25rem",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "heading2-bold": [
        "2rem",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "heading3-thin": [
        "1.5rem",
        {
          lineHeight: "140%",
          fontWeight: "300",
        },
      ],
      "heading3-bold": [
        "1.5rem",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "body-thin": [
        "1.25rem",
        {
          lineHeight: "140%",
          fontWeight: "300",
        },
      ],
      "body-regular": [
        "1.25rem",
        {
          lineHeight: "140%",
          fontWeight: "400",
        },
      ],
      "body-bold": [
        "1.25rem",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "base-thin": [
        "1rem",
        {
          lineHeight: "140%",
          fontWeight: "400",
        },
      ],
      "base-regular": [
        "1rem",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "base-bold": [
        "1rem",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "small-thin": [
        "0.87rem",
        {
          lineHeight: "140%",
          fontWeight: "300",
        },
      ],
    },
    extend: {
      colors: {
        black: "#0a0a0a",
        dark: "#1A191B",
        white: "#FBFBFB",
        gray: "#BABABA",
        "light-green": "#68A576",
        "cta-green": "#0e8327",
        "cta-green-hover": "#10782d",
        "dark-green-1": "#11421F",
        "dark-green-2": "#1A2E29",
        "shadow-green": "#414E4A",
        "gray-gradient": "C4C3C3",
      },
    },
    screens: {
      xxs: "20rem",
      xs: "23.4375rem",
      sm: "26.5625rem",
      sm1: "29.375rem",
      sm2: "35.9375rem",
      md: "48rem",
      md1: "52rem",
      md2: "58rem",
      lg: "64rem",
      lg1: "66.375rem",
      lg2: "72rem",
      xl: "80rem",
      xl1: "81.75rem",
      xxl: "90rem",
      xxxl: "108rem",
      xxxxl: "120rem",
      xxxxxl: "160rem",
    },
  },
  plugins: [],
};
export default config;
