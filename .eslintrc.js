module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    es2021: true,
    jest: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      }
    }
  },
  plugins: ["react"],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off",
    "no-case-declarations": "off",
    "import/no-cycle": 'off',
    "react/jsx-filename-extension": "off",
    // unitl we find a better solution
    "react/prop-types": "off",
    "react/no-unused-prop-types": "off",
    "no-shadow": "off",
    "prefer-destructuring": ["error", { "object": true, "array": false }],
    "react/forbid-prop-types": "off",
    "react/jsx-no-useless-fragment": "off",
    "radix": "off",
    "no-plusplus": "off",
    "react/jsx-props-no-spreading": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "react/no-array-index-key": "off",
    "no-nested-ternary": "off",
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "eslint:recommended",
    "plugin:prettier/recommended",
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
};
