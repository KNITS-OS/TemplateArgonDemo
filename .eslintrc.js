module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    jest: true,
    node: true,
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  settings: {
    react: { version: "detect" },
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
  extends: [
    "plugin:react/recommended",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",

    "import/prefer-default-export": "off",

    "react/jsx-filename-extension": "off",

    "react/function-component-definition": [
      "error",
      { namedComponents: "arrow-function", unnamedComponents: "arrow-function" },
    ],

    "react/prop-types": "off",
    "linebreak-style": ["error", process.platform === "win32" ? "windows" : "unix"],

    "import/default": "off",
    "import/no-named-as-default-member": "off",
    "import/no-named-as-default": "off",

    "jsx-a11y/anchor-is-valid": "off",

    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object"],
        "newlines-between": "always",
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: ".css",
            group: "external",
            position: "before",
          },
          {
            pattern: "react-redux",
            group: "external",
            position: "before",
          },
          {
            pattern: "react-router",
            group: "external",
            position: "before",
          },
          {
            pattern: "react-router-dom",
            group: "external",
            position: "before",
          },
          {
            pattern: "reactstrap",
            group: "external",
            position: "before",
          },
          {
            pattern: "components/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "redux/**",
            group: "internal",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    // uses .prettierrc.js file config
    // https://github.com/prettier/eslint-plugin-prettier#options
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
  },
};
