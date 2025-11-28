module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto"],
      },
      colors: {
        dubBlue: "#0F6CFF",
        dubText: "#0f1724",
        dubMuted: "#F5F7FA",
        dubCardBorder: "#E9EEF2",
        dubBadgeBlue: "#EAF4FF",
        dubBadgePurple: "#F3E9FF",
        dubBadgeGreen: "#E6FBF2",
        dubAccent: "#24EAFE",
      },
      spacing: {
        sidebar: "260px",
      },
      borderRadius: {
        xl2: "18px",
        fullPanel: "28px",
      },
      boxShadow: {
        dubSoft: "0 18px 50px rgba(15,20,25,0.06)",
        dubInset: "inset 0 -60px 80px rgba(15,20,25,0.02)",
      },
    },
  },
  plugins: [],
};
