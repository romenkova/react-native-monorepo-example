module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          shared: '../shared', // here's the magic
        },
      },
    ],
  ],
};
