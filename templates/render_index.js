require('@babel/register')({
  babelrc: false,
  presets: ['@babel/preset-env', '@babel/preset-react'],
  ignore: [/node_modules/],
  extensions: [".es6", ".es", ".jsx", ".js", ".tsx"],
  plugins: [
    "@babel/plugin-proposal-class-properties",
  //  "@babel/plugin-transform-typescript",
  //  "syntax-dynamic-import"
  ]
});
require("./src/main/public/server");
