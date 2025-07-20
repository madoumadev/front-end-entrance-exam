export default [
    {
        files: ["js/**/*.js"],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: {
                window: "readonly",
                document: "readonly",
                console: "readonly",
                html2pdf: "readonly",
                localStorage: "readonly",
                setTimeout: "readonly",
            },
        },
        rules: {
            "no-unused-vars": "error",
            "no-console": "warn",
            semi: ["error", "always"],
            quotes: ["error", "double"],
            indent: ["error", 4],
            "no-undef": "error",
        },
    },
];
