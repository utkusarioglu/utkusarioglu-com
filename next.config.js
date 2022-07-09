const withPwa = require("next-pwa");
const withOptimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");
const isProduction = process.env.NODE_ENV === "production";
const withManifestBuilder = require("./scripts/plugin");

const getBuildConfig = async (...args) => {
  const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ["page.tsx"],
    devIndicators: {
      buildActivity: false,
    },
  };

  const optimizedImagesPlugin = [
    withOptimizedImages,
    {
      inlineImageLimit: 8192,
      imagesFolder: "images",
      imagesName: "[name]-[hash].[ext]",
      handleImages: ["jpg", "png", "svg", "webp", "gif", "ico"],
      removeOriginalExtension: true,
      defaultImageLoader: "responsive-loader",
      optimizeImages: true,
      optimizeImagesInDev: true,
      mozjpeg: {
        quality: 70,
      },
      optipng: {
        optimizationLevel: 3,
      },
      pngquant: false,
      gifsicle: {
        interlaced: true,
        optimizationLevel: 3,
      },
      svgo: {},
      responsive: {
        adapter: require("responsive-loader/sharp"),
        sizes: [320, 640, 960, 1200, 1800, 2400],
        placeholder: true,
        format: "jpg",
      },
      webp: {
        preset: "default",
        quality: 15,
      },
      images: {
        loader: "akamai",
        path: "",
        disableStaticImages: true,
      },
    },
  ];

  const pwaPlugin = [
    withPwa,
    {
      pwa: {
        dest: "public",
        disable: !isProduction,
      },
    },
  ];

  const manifestBuilderPlugin = [
    withManifestBuilder,
    {
      manifest: {
        shortName: "Utku Sarioglu",
        name: "Utku Sarioglu",
        description: "Utku Sarioglu's personal website",
        startUrl: "https://www.utkusarioglu.com",
        orientation: "portrait",
        display: "standalone",
        themeColor: "#f59e0b",
        backgroundColor: "#171717",
        icons: {
          sizes: [16, 32, 64, 120, 128, 144, 150, 192, 256, 512],
          groups: [
            {
              rel: "icon",
              format: "png",
              sizes: [16, 32],
            },
            {
              rel: "apple-touch-icon",
              format: "png",
              sizes: [64, 120, 128, 144, 150, 192, 256, 512],
            },
            {
              rel: "mask-icon",
              format: "svg",
            },
            {
              rel: "shortcut icon",
              format: "ico",
              sizes: [16],
            },
          ],
          source: "assets/logo/logo.svg",
          // iconsSubfolder: "icons",
        },
        // manifestSubfolder: "",
        // browserConfigSubfolder: "",
        // baseFolder: "./.next/static",
      },
    },
  ];

  return withPlugins(
    [
      //
      manifestBuilderPlugin,
      optimizedImagesPlugin,
      pwaPlugin,
    ],
    nextConfig
  )(...args);
};

module.exports = (phase, ...rest) => {
  const shouldAddBuildConfig = [
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
  ].includes(phase);

  return shouldAddBuildConfig
    ? getBuildConfig(phase, ...rest)
    : getBuildConfig(phase, ...rest);
};
