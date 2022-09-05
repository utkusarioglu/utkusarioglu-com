const withPwa = require("next-pwa");
const withOptimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");
const withManifestBuilder = require("./scripts/plugin");
const commonConfig = require("./common.config.json");

const isProduction = process.env.NODE_ENV === "production";
const subdomain = process.env.SUBDOMAIN;

process.env.CI && console.log("next.config using env:\n", process.env);

const env = {
  SUBDOMAIN: subdomain,
  ...commonConfig,
};

const getBuildConfig = async (...args) => {
  const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ["page.tsx"],
    devIndicators: {
      buildActivity: false,
    },
    env,
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
        sizes: [
          320,
          env.MAX_W_PROSE,
          960 - env.IMG_ZOOM_MARGIN * 2,
          1200 - env.IMG_ZOOM_MARGIN * 2,
          1920 - env.IMG_ZOOM_MARGIN * 2,
        ],
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
        shortName: env.APP_NAME,
        name: env.APP_NAME,
        description: "Utku Sarioglu's personal website",
        startUrl: `https://${env.SUBDOMAIN}.${env.DOMAIN}`,
        orientation: "portrait",
        display: "standalone",
        themeColor: env.BRAND,
        backgroundColor: env.BASE_DARK,
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
