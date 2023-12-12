module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module:react-native-dotenv',
            {
                path: '.env',
            },
        ],
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
                alias: {
                    'test/*': ['./test/'],
                },
            },
        ],
        'react-native-reanimated/plugin',
    ],
}
