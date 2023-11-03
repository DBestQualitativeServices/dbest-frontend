/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            transparent: "transparent",
            background: "rgb(277, 277, 277)",
            opaqueBackground: "rgb(260, 260, 260, 0.25)",
            backgroundLight: "rgb(266, 266, 266)",
            backgroundDark: "rgb(220, 220, 220)",
            textColor: "rgb(12, 12, 12)",
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
