import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT({
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "slate-500": "rgb(100, 116, 139)",
                "zinc-500": "rgb(113 113 122)",
                primary: {
                    50: "#e5e9f3",
                    100: "#c0c9e0",
                    200: "#97a5cb",
                    300: "#6f81b5",
                    400: "#5064a4",
                    500: "#4267a9",
                    600: "#3a5b96",
                    700: "#324d80",
                    800: "#273d66",
                    900: "#1b2d4d",
                },
            },
        },
    },

    plugins: [forms],
});
