module.exports = {
    root: true,
    extends: '@react-native-community',
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        'max-len': [2, { code: 120, tabWidth: 4, ignoreUrls: true }],
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                'react-hooks/exhaustive-deps': 'off',
                '@typescript-eslint/no-shadow': ['error'],
                'no-shadow': 'off',
                'no-undef': 'off',
                semi: 0,
                'react-native/no-inline-styles': 0,
            },
        },
    ],
};
