module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#570DF8",
          secondary: "#2563eb",
          accent: "#FFEDD5",
          neutral: "#374151",
          "base-100": "#ffffff",
          info: "#98A8DD",
          success: "#1BBB70",
          warning: "#DF7E07",
          error: "#FA5C5C",
        },
      },
      {
        dark: {
          primary: "#D9F99D",
          secondary: "#FDE68A",
          accent: "#4B5563",
          neutral: "#e5e7eb",
          "base-100": "#1F2937",
          info: "#98A8DD",
          success: "#1BBB70",
          warning: "#F59E0B",
          error: "#FB7185",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};