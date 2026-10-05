/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B1220",
        secondary: "#1E293B",
        surface: "#FAFAF8",
        border: "#E7E5E4",
        accent: {
          gold: "#C8A45D",
          blue: "#2563EB",
        },
        success: "#16A34A",
        text: {
          primary: "#111827",
          secondary: "#6B7280",
        }
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body: ["'Manrope'", "sans-serif"],
        ui: ["'Inter'", "sans-serif"],
      },
      borderRadius: {
        'luxury': '20px',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
