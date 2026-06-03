/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",
        secondary: "#10B981",
        surface: "#F8FAFC",
        "surface-dark": "#0F172A",
        "text-main": "#0F172A",
        "text-muted": "#64748B",
        "muted-indigo": "#6366F1",
        "slate-blue": "#3B82F6",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
