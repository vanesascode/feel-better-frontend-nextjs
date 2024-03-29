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
          lineHeight: "120%",
          fontWeight: "600",
        },
      ],
      "cover2-semibold": [
        "64px",
        {
          lineHeight: "110%",
          fontWeight: "600",
        },
      ],
      "heading1-thin": [
        "36px",
        {
          lineHeight: "140%",
          fontWeight: "400",
        },
      ],
      "heading1-regular": [
        "36px",
        {
          lineHeight: "140%",
          fontWeight: "500",
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
          fontWeight: "400",
        },
      ],
      "heading2-regular": [
        "32px",
        {
          lineHeight: "140%",
          fontWeight: "500",
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
          fontWeight: "400",
        },
      ],
      "heading3-regular": [
        "24px",
        {
          lineHeight: "140%",
          fontWeight: "500",
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
        "cta-green-hover": "#108d2d",
        "dark-green-1": "#11421F",
        "dark-green-2": "#1A2E29",
        "shadow-green": "#414E4A",
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
      xxl: "1440px", // Laptop L, Desktop S
      xxxl: "1728px", // Desktop M
      xxxxl: "1920px", // Desktop L
      xxxxxl: "2560px", // 4k
    },
  },
  plugins: [],
};
export default config;
