module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ["standard"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    use: true
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    quotes: ["error", "double"],
    "space-before-function-paren": ["error", "never"]
  }
};
