import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "cover1-regular": [
        "96px",
        {
          lineHeight: "140%",
          fontWeight: "400",
        },
      ],
      "cover1-medium": [
        "96px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "cover1-semibold": [
        "96px",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "cover1-bold": [
        "96px",
        {
          lineHeight: "140%",
          fontWeight: "700",
        },
      ],
      "cover2-regular": [
        "64px",
        {
          lineHeight: "140%",
          fontWeight: "400",
        },
      ],
      "cover2-medium": [
        "64px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "cover2-semibold": [
        "64px",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "cover2-bold": [
        "64px",
        {
          lineHeight: "140%",
          fontWeight: "700",
        },
      ],
      "heading1-regular": [
        "36px",
        {
          lineHeight: "140%",
          fontWeight: "400",
        },
      ],
      "heading1-medium": [
        "36px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "heading1-semibold": [
        "36px",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "heading1-bold": [
        "36px",
        {
          lineHeight: "140%",
          fontWeight: "700",
        },
      ],
      "heading2-regular": [
        "32px",
        {
          lineHeight: "140%",
          fontWeight: "400",
        },
      ],
      "heading2-medium": [
        "32px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "heading2-semibold": [
        "32px",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "heading2-bold": [
        "32px",
        {
          lineHeight: "140%",
          fontWeight: "700",
        },
      ],
      "heading3-regular": [
        "24px",
        {
          lineHeight: "140%",
          fontWeight: "400",
        },
      ],
      "heading3-medium": [
        "24px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "heading3-semibold": [
        "24px",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "heading3-bold": [
        "24px",
        {
          lineHeight: "140%",
          fontWeight: "700",
        },
      ],
      "body-regular": [
        "20px",
        {
          lineHeight: "140%",
          fontWeight: "400",
        },
      ],
      "body-medium": [
        "20px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "body-semibold": [
        "20px",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "body-bold": [
        "20px",
        {
          lineHeight: "140%",
          fontWeight: "700",
        },
      ],
      "base-regular": [
        "16px",
        {
          lineHeight: "140%",
          fontWeight: "400",
        },
      ],
      "base-medium": [
        "16px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "base-semibold": [
        "16px",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "base-bold": [
        "16px",
        {
          lineHeight: "140%",
          fontWeight: "700",
        },
      ],
      "small-regular": [
        "14px",
        {
          lineHeight: "140%",
          fontWeight: "400",
        },
      ],
      "small-medium": [
        "14px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "small-semibold": [
        "14px",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "small-bold": [
        "14px",
        {
          lineHeight: "140%",
          fontWeight: "700",
        },
      ],
    },
    extend: {
      fontFamily: {
        source: ["Source Sans Pro", "sans-serif"],
        epilogue: ["Epilogue", "sans-serif"],
      },
      colors: {
        black: "#0a0a0a",
        dark: "#1A191B",
        white: "#FBFBFB",
        gray: "#8B8B8B",
        "light-green": "#68A576",
        "cta-green": "#0F9E2E",
        "dark-green-1": "#11421F",
        "dark-green-2": "#1A2E29",
        "gray-gradient": "C4C3C3",
      },
    },

    screens: {
      xxs: "320px", // Mobile S
      xs: "375px", // Mobile M
      sm: "425px", // Mobile L
      sm2: "575px",
      md: "768px", // Tablet
      lg: "1024px", // Laptop S
      xl: "1280px", // Laptop M
      xxl: "1440px", // Laptop L
    },
  },
  plugins: [],
};
export default config;
