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
    "import/default": 'off',
    "import/no-cycle": 'off',
    "import/named": 'off',
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "global-require": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "react/no-unused-prop-types": "off",
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
};
