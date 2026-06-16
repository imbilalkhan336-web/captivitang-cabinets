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
                display: ['Alata', ...defaultTheme.fontFamily.sans],
                serif: ['"Playfair Display"', 'Georgia', 'serif'],
                alata: ['Alata', ...defaultTheme.fontFamily.sans],
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
            },
            animation: {
                'offer-in': 'offerIn 500ms ease-out',
                marquee: 'marquee 90s linear infinite',
            },
        },
    },

    plugins: [forms],
};
