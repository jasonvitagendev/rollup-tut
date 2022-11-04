module.exports = {
    env: {
        browser: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
};
