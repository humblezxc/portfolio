/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./app/**/*.{ts,tsx,js,jsx}",
        "./components/**/*.{ts,tsx,js,jsx}",
        "./pages/**/*.{ts,tsx,js,jsx}",
        "./src/**/*.{ts,tsx,js,jsx}"
    ],
    darkMode: "class",
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "1.25rem",
                lg: "2rem",
                xl: "3rem",
                "2xl": "4rem",
            },
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                // subtle glassish color tokens (customize)
                "glass-weak": "rgba(255,255,255,0.06)",
                "glass-strong": "rgba(255,255,255,0.12)",
            },
            borderRadius: {
                '2xl': '1rem'
            }
        },
    },
    plugins: [],
};
