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

        "@typescript-eslint/brace-style": [2, "1tbs", { "allowSingleLine": true }],

        "@typescript-eslint/consistent-type-definitions": [2, "interface"],

        "@typescript-eslint/no-misused-new": 2,
        "@typescript-eslint/prefer-function-type": 2,
        "@typescript-eslint/prefer-namespace-keyword": 2,

        "@typescript-eslint/quotes": [2, "single", { "avoidEscape": true, "allowTemplateLiterals": true }],

        "@typescript-eslint/semi": 2,

        "@typescript-eslint/space-before-function-paren": [2, {
            "asyncArrow": "always",
            "anonymous": "always",
            "named": "never"
        }],

        "@typescript-eslint/triple-slash-reference": 2,
        "@typescript-eslint/type-annotation-spacing": 2,
        "@typescript-eslint/unified-signatures": 2,

        "curly": [2, "multi-line"],
        "no-caller": 2,
        "no-duplicate-case": 2,
        "no-eval": 2,
        "no-extra-bind": 2,
        "no-new-wrappers": 2,
        "no-return-await": 2,
        "no-sparse-arrays": 2,
        "no-template-curly-in-string": 2,
        "no-throw-literal": 2,
        "no-trailing-spaces": 2,
        "no-unsafe-finally": 2,
        "object-shorthand": 2,
        "prefer-object-spread": 2,
        "quote-props": [2, "consistent-as-needed"],
        "space-in-parens": 2,
        "unicode-bom": [2, "never"],

        "no-useless-escape": 0,
        'generator-star-spacing': 'off', // 0/'off' 关闭此项语法检查, 1 作为一个黄色警告, 2 作为一个红色错误
        // kjf
        "indent": [2, 4],//缩进风格 [2, 4]
        "no-undef-init": 2,
        "no-undef": 1, // 不能有未定义的变量
        "no-unreachable": 1, // 不能有无法执行的代码
        "camelcase": 0, // 强制驼峰法命名
        "eqeqeq": 2, // 必须使用全等
        "new-parens": 2, // new时必须加小括号
        "quotes": [1, "single"], // 引号类型 `` "" ''
        "radix": 2, // parseInt必须指定第二个参数
        "space-after-keywords": [0, "always"], // 关键字后面不要空一格
        "space-before-function-paren": [0, "always"], // 函数定义时括号前面要不要有空格
        "spaced-comment": 0, // 注释风格要不要有空格什么的
        "use-isnan": 2, // 禁止比较时使用NaN，只能用isNaN()
        "wrap-iife": [2, "inside"], // 立即执行函数表达式的小括号风格
        "wrap-regex": 0, // 正则表达式字面量用小括号包起来
        "comma-style": [2, "last"], // 分后在语句的最后
        "semi": [2, "always"], // 总是写分号
        'operator-linebreak': [2, 'before'], // 换行时运算符在行尾
        'vue/no-parsing-error': ['error', {
            'invalid-first-character-of-tag-name': false
        }],
        'no-irregular-whitespace': 2
    }
};
