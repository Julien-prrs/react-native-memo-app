module.exports = function (api) {
  // api.cache(true);
  api.cache(false);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-classname-to-style",
      [
        "react-native-stylename-to-style",
        { "extensions": ["css", "scss", "sass"] }
      ],
      [
        "react-native-platform-specific-extensions",
        { "extensions": ["css", "scss", "sass"] }
      ]
    ]
  };
};