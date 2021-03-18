module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        "plugin:vue/essential",
        "eslint:recommended",
        "@vue/typescript/recommended",
        "@vue/prettier",
        "@vue/prettier/@typescript-eslint"
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "dot-notation": "off",

        "@typescript-eslint/adjacent-overload-signatures": "off",
        "@typescript-eslint/no-this-alias": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/array-type": "off",
        "@typescript-eslint/no-inferrable-types": [
            "warn", {
                "ignoreParameters": true
            }
        ],

        "indent": ["error", 4],

        "@typescript-eslint/brace-style": ["error", "1tbs", { "allowSingleLine": true }],

        "@typescript-eslint/consistent-type-definitions": ["error", "interface"],

        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",

        "quotes": ["error", "single", {"allowTemplateLiterals": true}],
        "@typescript-eslint/quotes": ["error", "single", { "avoidEscape": true, "allowTemplateLiterals": true }],

        "semi": ["error", "always"],
        "@typescript-eslint/semi": "error",

        "@typescript-eslint/space-before-function-paren": ["error", {
            "asyncArrow": "always",
            "anonymous": "always",
            "named": "never"
        }],

        "@typescript-eslint/triple-slash-reference": "error",
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/unified-signatures": "error",

        "curly": ["error", "multi-line"],
        "new-parens": "error",
        "no-caller": "error",
        "no-duplicate-case": "error",
        "no-eval": "error",
        "no-extra-bind": "error",
        "no-new-wrappers": "error",
        "no-return-await": "error",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef-init": "error",
        "no-unsafe-finally": "error",
        "object-shorthand": "error",
        "prefer-object-spread": "error",
        "quote-props": ["error", "consistent-as-needed"],
        "space-in-parens": "error",
        "unicode-bom": ["error", "never"],
        "use-isnan": "error",
        "no-useless-escape": 0
    }
};
