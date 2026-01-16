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
                primary: {
                    50: "#faf5ff",
                    100: "#f3e8ff",
                    200: "#e9d5ff",
                    300: "#d8b4fe",
                    400: "#c084fc",
                    500: "#a855f7",
                    600: "#9333ea",
                    700: "#7c3aed",
                    800: "#6b21a8",
                    900: "#581c87",
                    950: "#3b0764",
                },
                accent: {
                    light: "#c4b5fd",
                    DEFAULT: "#8b5cf6",
                    dark: "#6d28d9",
                },
                "glass-weak": "rgba(139, 92, 246, 0.06)",
                "glass-strong": "rgba(139, 92, 246, 0.12)",
                "glass-border": "rgba(139, 92, 246, 0.15)",
            },
            borderRadius: {
                "2xl": "1rem",
                "3xl": "1.5rem",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-purple": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                "gradient-violet": "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
            },
            boxShadow: {
                "glow-sm": "0 0 15px rgba(139, 92, 246, 0.3)",
                "glow-md": "0 0 30px rgba(139, 92, 246, 0.4)",
                "glow-lg": "0 0 45px rgba(139, 92, 246, 0.5)",
            },
        },
    },
    plugins: [],
};
