const createExpoWebpackConfig = require("@expo/webpack-config");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const DotenvWebpack = require("dotenv-webpack");
const path = require("path");


module.exports = async function (env, argv) {
  // Load environment variables from .env file based on the mode (development or production)
  // You might need to adjust paths or filenames according to your setup
  const envPath =
    env.mode === "production" ? ".env.production" : ".env.development";
  require("dotenv").config({ path: envPath });

  // Ensure the mode is correctly set based on the environment
  env.mode = env.mode || "development";

  // Generate the default Expo webpack config
  const config = await createExpoWebpackConfig(env, argv);

  // Add DotenvWebpack plugin to load environment variables
  config.plugins.push(
    new DotenvWebpack({
      path: envPath, // Use the path to your environment variables file
    })
  );

  config.plugins.push(
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "/images"),
          to: "images",
        },
      ],
    })
  );
  return config;
};
