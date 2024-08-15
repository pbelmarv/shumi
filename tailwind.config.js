/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: "selector",
    theme: {
        extend: {
            fontFamily: {
                poppins: ["poppins", "sans-serif"],
                bangers: ["bangers", "system-ui"],
                'comic-neue': ["Comic Neue", "cursive"],
                badaboom: ['Badaboom', "sans-serif"],
                acme: ['Acme', "sans-serif"],
            },
            fontWeight: {
                thin: "100",
                hairline: "100",
                extralight: "200",
                light: "300",
                normal: "400",
                medium: "500",
                semibold: "600",
                bold: "700",
                extrabold: "800",
                "extra-bold": "800",
                black: "900",
            },
        },
        screens: {
            tablet: "640px",
            laptop: "1024px",
            desktop: "128px",
        },
    },
    plugins: [],
};
