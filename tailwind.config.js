module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "100-32": "var(--width-btn)",
        "50/2": "calc(50%  - 16px)",
        "25/4": "calc(25% - 16px)",
        128: "512px",
        "minus-128": "calc(100%  - 512px)",
        "100/3-2rem": "calc(100% / 3 - 1.5rem)",
      },
      height: {
        500: "500px",
        72:"72px"
      },
      maxWidth: {
        "4/12": "33.333333%",
        "calc-8/12": "calc(66.666667% / 4)",
        "4/5": "80%",
        "11/12":"91.666667%",
      },
      minHeight: {
        96: "384px",
      },
      fontFamily: {
        mulish: "Mulish",
        fl_icons: "fl-icons",
      },
      fontSize: {
        clampSx: [
          "clamp(12px, 3vw, 14px)",
          {
            lineHeight: "150%",
          },
        ],
        clampSm: [
          "clamp(14px, 3vw, 18px)",
          {
            lineHeight: "150%",
          },
        ],
        clampBase: [
          "clamp(16px, 3vw, 16px)",
          {
            lineHeight: "150%",
          },
        ],
        clampLg: [
          "clamp(18px, 4vw, 22px)",
          {
            lineHeight: "130%",
          },
        ],
      },
      lineHeight: {
        9: "2.25rem",
        12: "3rem",
        13: "3.5rem",
      },
      zIndex: {
        1: "1",
      },
      boxShadow: {
        "black-4-8":
          "0px 2px 16px rgb(0 0 0 / 4%), 0px 4px 32px rgb(0 0 0 / 8%)",
      },
      dropShadow: {
        "black-25": "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      textColor: {
        primary: "#1D53DA",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#1d124c",
        second: "#1D53DA",
        dashboard: "#007BFC",       
        "white-12": "rgba(255, 255, 255, 0.12)",
        discount:"rgba(250, 80, 89, 0.08)"
      }),
      borderColor: {
        primary: "#1D53DA",
        search:"rgba(255, 255, 255, 0.2)"
      },
      textIndent: (theme, { negative }) => ({
        ...{
          sm: "2rem",
          md: "3rem",
          lg: "4rem",
          full: "-9999px",
        },
      }),
    },
  },
  variants: {
    extend: {},
    textIndent: ["responsive"],
  },
  plugins: [
    require("tailwindcss-text-indent"),
    require("@tailwindcss/line-clamp"),
  ],
};
