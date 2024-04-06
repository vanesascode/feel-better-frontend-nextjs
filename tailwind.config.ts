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
        "96px",
        {
          lineHeight: "100%",
          fontWeight: "600",
        },
      ],
      "cover2-semibold": [
        "64px",
        {
          lineHeight: "100%",
          fontWeight: "600",
        },
      ],
      "cover3-semibold": [
        "54px",
        {
          lineHeight: "110%",
          fontWeight: "600",
        },
      ],
      "heading1-thin": [
        "36px",
        {
          lineHeight: "140%",
          fontWeight: "300",
        },
      ],
      "heading1-regular": [
        "36px",
        {
          lineHeight: "140%",
          fontWeight: "400",
        },
      ],
      "heading1-bold": [
        "36px",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "heading2-thin": [
        "32px",
        {
          lineHeight: "140%",
          fontWeight: "300",
        },
      ],
      "heading2-regular": [
        "32px",
        {
          lineHeight: "140%",
          fontWeight: "400",
        },
      ],
      "heading2-bold": [
        "32px",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "heading3-thin": [
        "24px",
        {
          lineHeight: "140%",
          fontWeight: "300",
        },
      ],
      "heading3-regular": [
        "24px",
        {
          lineHeight: "140%",
          fontWeight: "400",
        },
      ],
      "heading3-bold": [
        "24px",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "body-thin": [
        "20px",
        {
          lineHeight: "140%",
          fontWeight: "300",
        },
      ],
      "body-regular": [
        "20px",
        {
          lineHeight: "140%",
          fontWeight: "400",
        },
      ],
      "body-bold": [
        "20px",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "base-thin": [
        "16px",
        {
          lineHeight: "140%",
          fontWeight: "400",
        },
      ],
      "base-regular": [
        "16px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "base-bold": [
        "16px",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "small-thin": [
        "14px",
        {
          lineHeight: "140%",
          fontWeight: "300",
        },
      ],
      "small-regular": [
        "14px",
        {
          lineHeight: "140%",
          fontWeight: "400",
        },
      ],
      "small-bold": [
        "14px",
        {
          lineHeight: "140%",
          fontWeight: "600",
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
        "cta-green": "#0F9E2E",
        "cta-green-hover": "#10782d",
        "dark-green-1": "#11421F",
        "dark-green-2": "#1A2E29",
        "shadow-green": "#414E4A",
        "gray-gradient": "C4C3C3",
      },
    },

    screens: {
      xxs: "320px",
      xs: "375px",
      sm: "425px",
      sm1: "470px",
      sm2: "575px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
      xxxl: "1728px",
      xxxxl: "1920px",
      xxxxxl: "2560px",
    },
  },
  plugins: [],
};
export default config;
