import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['"Roboto Flex"', ...defaultTheme.fontFamily.sans],
                display: ['"Roboto Flex"', ...defaultTheme.fontFamily.sans],
                serif: ['"Playfair Display"', 'Georgia', 'serif'],
                allura: ['Allura', 'cursive'],
                italianno: ['Italianno', 'cursive'],
                'great-vibes': ['"Great Vibes"', 'cursive'],
            },
            maxWidth: {
                container: '1400px',
            },
            keyframes: {
                offerIn: {
                    '0%': { opacity: '0', transform: 'translateY(6px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                menuIn: {
                    '0%': { opacity: '0', transform: 'translateX(14px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
            },
            animation: {
                'offer-in': 'offerIn 500ms ease-out',
                marquee: 'marquee 90s linear infinite',
                'menu-in': 'menuIn 220ms ease-out',
            },
        },
    },

    plugins: [forms],
};
