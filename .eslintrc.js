module.exports =  {
  parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends:  [
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript"
  ],
  plugins: ["import"],
  parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    sourceType:  'module',  // Allows for the use of imports
  },
  rules:  {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "import/order": ["error", { "newlines-between": "always", "groups": ["builtin", "external", ["parent", "sibling", "index"]] }],
    "import/no-named-as-default": "off",
    "import/newline-after-import": "error"
  },
};