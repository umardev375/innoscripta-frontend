module.exports = {
  content: [
    "./src/Components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "22px": "1.375rem",
        "2rem": "2rem",
        "4rem": "4rem",
        "5.5rem": "5.5rem",
        "28px":"1.75rem",
        "64px":"4rem",
        "40px":"2.5rem",
        "34px":"2.125rem"
      },
      colors: {
        themecolor: "#E0F27B",
        black1: "#090909",
        black2: "#29303A", 
        primary: "#8B9199",
        secondary: "#B0B0B0",
        red1: "#E41534",
        lightgray: "#777E90",
        lightgray1: "#F8F8F8",
        gray1: "#E6E8EC",
        blue1: "#1BA2DA ",
        blue2: "#1660CF ",
        green1: "#59C36A",
        green2: "#27AE60",
        gray2: "#96A2B5",
        gray3: "#D2D2D2"
      },
      fontFamily: {
        "Circular-Medium": "Circular-Std-Medium",
        "Circular-Bold": "Circular-Std-Bold",
        "Circular-Black": "Circular-Std-Black",
        "Circular-Book": "Circular-Std-Book",
      },
      screens: {
        // "xs": { min: "320px", max: "500px" },
        // "xs2": { max: "420px" },
        // "xs3": { min: "300px" , max:"370px" },
        // "xs4": { max: "440px" },



      },
      boxShadow: {
        "3xl": "0px 4px 5px 2px #0000000D",
      },
    },
  },
  plugins: [],
};
