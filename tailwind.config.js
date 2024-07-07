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
                slate: {
                    100: "#e0e3e8",
                    200: "#c1c7d1",
                    300: "#a2acb9",
                    400: "#8390a2",
                    500: "#64748b",
                    600: "#505d6f",
                    700: "#3c4653",
                    800: "#282e38",
                    900: "#14171c",
                },
                zinc: {
                    100: "#e3e3e4",
                    200: "#c6c6ca",
                    300: "#aaaaaf",
                    400: "#8d8d95",
                    500: "#71717a",
                    600: "#5a5a62",
                    700: "#444449",
                    800: "#2d2d31",
                    900: "#171718",
                },
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
