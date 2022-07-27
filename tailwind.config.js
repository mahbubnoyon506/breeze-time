module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#006BFF",
          "secondary": "#0B3558",
          "accent": "#0AE8F0",
          "neutral": "#000000",
          "base-100": "#EEEFF6",
          "info": "#92C9DD",
          "success": "#23D7B6",
          "warning": "#EB8D28",
          "error": "#E2507C",
        },
      },
    ],
  },
  plugins: [require("daisyui")]
};

