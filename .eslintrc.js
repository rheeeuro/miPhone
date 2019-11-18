module.exports = {
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  rules: {
    "no-console": "off",
    camelcase: [2, { properties: "never" }]
  },
  env: {
    browser: true
  }
};
