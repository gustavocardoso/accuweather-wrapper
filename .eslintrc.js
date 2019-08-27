module.exports = {
  env: {
    browser: true,
    es6: true,
    mocha: true,
    node: true
  },
  extends: ['standard'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module'
  },
  plugins: ['chai-friendly'],
  rules: {
    'no-unused-expressions': 0,
    'chai-friendly/no-unused-expressions': 2
  }
}
