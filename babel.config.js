module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    '@babel/plugin-proposal-numeric-separator',
    'react-native-reanimated/plugin',
  ],
}
