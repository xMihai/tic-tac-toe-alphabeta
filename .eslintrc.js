module.exports = {
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 8
  },
  env: {
    node: true,
    es6: true
  },
  rules: {
    "no-console": "off"
  }
};
