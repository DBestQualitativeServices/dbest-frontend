/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                whiteShade: 'rgb(255, 255, 255)',
                darkShade: 'rgb(12, 12, 12)',
                accent: 'rgb(12, 150, 153)',
                darkAccent: 'rgb(7, 82, 84)',
                doubleDarkAccent: 'rgb(5, 60, 61)',
                tripleDarkAccent: 'rgb(4, 45, 46)'
            },
            fontSize: {
                phoneSmall: '14px',
                phoneMedium: '16px',
                phoneLarge: '22px',
                phoneDoubleLarge: '32px',
                phoneTripleLarge: '36px',
                pcSmall: '14px',
                pcMedium: '18px',
                pcLarge: '28px',
                pcDoubleLarge: '42px',
                pcTripleLarge: '48px',
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
