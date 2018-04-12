module.exports = {

  "globals": {
    "MyGlobal": true
  },

  "env": {
    "browser": true,
    "es6": true
  },
  "parserOptions": {
    "sourceType": "module"
  },
  "extends": "standard",
  "rules": {
    "indent": ["error", 2],
    "key-spacing": ["error", { "mode": "minimum" }],
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "space-infix-ops": ["error", {"int32Hint": false}],
    "space-before-blocks": "error",
    "keyword-spacing": "error",
    "block-spacing": "error",
    "space-in-parens": "error",
    "eqeqeq": "error",
    "no-unneeded-ternary": ["error", { "defaultAssignment": false }],
    "camelcase": "error"
  }

};
