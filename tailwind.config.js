/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        colors: {
            transparent: "transparent",

            background: "rgb(277, 277, 277)",
            darkBackground: "rgb(17, 17, 17)",

            opaqueBackground: "rgb(260, 260, 260, 0.25)",
            darkOpaqueBackground: "rgb(17, 17, 17, 0.25)",

            backgroundLight: "rgb(266, 266, 266)",
            darkBackgroundLight: "rgb(35, 35, 35)",

            backgroundDark: "rgb(220, 220, 220)",
            darkBackgroundDark: "rgb(8, 8, 8)",

            textColor: "rgb(12, 12, 12)",
            darkTextColor: "rgb(235, 236, 243)",

            brandColor: "rgb(60, 2" +
                "01, 219)"
        },
        extend: {
            fontSize: {
                'xs': '1.4rem',
                'sm': '1.6rem',
                'md': '2.0rem',
                'lg': '3.4rem',
                'xl': '5.4rem',
                '2xl': '9.4rem',
            },
        },
    },
    plugins: [],
    corePlugins: {
        container: false,
    },
};
