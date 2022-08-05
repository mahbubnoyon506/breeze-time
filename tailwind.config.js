module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#101957",
          "primary-2": "#530C0C",
          secondary: "#4152C6",
          "secondary-2": "#6B0B0C",
          accent: "#F96567",
          "accent-2": "#DDE1FF",
          "accent-3": "#F7E7D0",
          tertiary: "#C47D11",
          "tertiary-2": "#C8B59A",
          "tertiary-3": "#FFCB7C",
          neutral: "#000000",
          "base-100": "#EEEFF6",
          info: "#92C9DD",
          success: "#23D7B6",
          warning: "#EB8D28",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
