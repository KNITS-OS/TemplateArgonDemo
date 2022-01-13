module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    es2021: true,
    jest: true,
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  plugins: ["react", "jsx-a11y", "import", "react-hooks"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": "off",
    "import/no-cycle": "off",
    // unitl we find a better solution
    "react/prop-types": "off",
    "react/no-unused-prop-types": "off",
    "react/forbid-prop-types": "off",
    "no-shadow": "off",
    "prefer-destructuring": ["error", { object: true, array: false }],
    "react/jsx-props-no-spreading": "off",
    "react/jsx-no-useless-fragment": "off",
    radix: "off",
    "no-plusplus": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "react/no-array-index-key": "off",
    "no-nested-ternary": "off",
    "react/function-component-definition": [
      "error",
      { namedComponents: "arrow-function", unnamedComponents: "arrow-function" },
    ],
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
  },
};
