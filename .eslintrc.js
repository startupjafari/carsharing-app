module.exports = {
  extends: ["next/core-web-vitals", "plugin:prettier/recommended"],
  rules: {
    "no-console": "warn",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
