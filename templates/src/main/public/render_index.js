require("@babel/register")({
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-typescript",
    "syntax-dynamic-import"
  ]
});
require("../../../webpack.common");
require("./server");
