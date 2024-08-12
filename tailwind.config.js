/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          xl: "1440px",
        },
        margin: "0 auto",
      },
      colors: {
        primary: "#5B5CE2",
        secondary: "#1BC58D",
        bgColor: "#EEEEF5",
        hoverColor: "#6C6DE5",
        buttonColor: "#F7F7FF",
        fontError: "#F1419D",
        inputColor: "#F6F6FB",
        fontPrimary: "#212121",
        fontSecondary: "#B5B5C3",
      },
      fontFamily: {
        primary: ["Mulish"],
        secondary: ["MulishBold"],
        thirth: ["MulishSemiBold"],
      },
    },
  },
  plugins: [],
};
