module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#101957",
          'primary-focus': "#530C0C",
          secondary: "#4152C6",
          'secondary-focus': "#6B0B0C",
          accent: "#F96567",
          'accent-focus': "#DDE1FF",
          'accent-content': "#F7E7D0",
          tertiary: "#C47D11",
          'tertiary-focus': "#C8B59A",
          'tertiary-content': "#FFCB7C",
          neutral: "#C47D11",
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
