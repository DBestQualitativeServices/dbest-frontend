/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '845px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        colors: {
            transparent: "transparent",

            background: "rgb(277, 277, 277)",
            darkBackground: "rgb(35, 35, 35)",

            opaqueBackground: "rgb(260, 260, 260, 0.25)",
            darkOpaqueBackground: "rgb(17, 17, 17, 0.25)",

            backgroundLight: "rgb(266, 266, 266)",
            darkBackgroundLight: "rgb(35, 35, 35)",

            backgroundDark: "rgb(220, 220, 220)",
            darkBackgroundDark: "rgb(8, 8, 8)",

            textColor: "rgb(12, 12, 12)",
            darkTextColor: "rgb(235, 236, 243)",

            brandColor: "rgb(12, 150, 153)"
        },
        extend: {

            fontSize: {
                'xs': '1.0rem',
                'sm': '1.1rem',
                'md': '1.3rem',
                'lg': '2.0rem',
                'xl': '5.0rem',
                '2xl': '9.4rem',
            },
        },
    },
    plugins: [],
    corePlugins: {
        container: false,
    },
};
