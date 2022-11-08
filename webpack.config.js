const webpack = require("webpack");

plugins: [
  // other plugins,
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    "window.jQuery": "jquery",
  }),
];
