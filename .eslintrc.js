module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'airbnb',
  // required to lint *.vue files
  plugins: [
    "react",
    "react-native"
  ],
"ecmaFeatures": {
    "jsx": true
  },
  // add your custom rules here
  "rules": {
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/forbid-prop-types": [1, { "forbid": [] }],
    "import/no-extraneous-dependencies": ["error", {"optionalDependencies": false}]
  }
}
