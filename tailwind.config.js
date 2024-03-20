/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          primary: "var(--primary)",
          secondary: "var(--secondary)",
          accent: "var(--accent)",
          light: "var(--text-light)",
          dark: "var(--text-dark)",
          background: "var(--background)",
          herobackground: "var(--herobackground)",
          lightBlack: "#8A8A8A",
          lightGrey: "#969BA033",
        },
      },
      backgroundColor: {
        skin: {
          primary: "var(--primary)",
          accent: "var(--accent)",
          background: "var(--background)",
          herobackground: "var(--herobackground)",
          light: "var(--text-light)",
        },
      },
      borderColor: {
        skin: {
          primary: "var(--primary)",
          accent: "var(--accent)",
          secondary: "var(--secondary)",
        },
      },
    },
    fontFamily: {
      Lato: ["Lato"],
    },
  },
  plugins: [],
};
