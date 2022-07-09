const {
  createProperties,
  writeFiles,
  checkRequirements,
  addMissingOptions,
} = require("./pwa-manifest");
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

module.exports = (nextConfig = {}, nextComposePlugins = {}) => {
  checkRequirements(nextConfig);
  nextConfig = addMissingOptions(nextConfig, nextConfig.distDir || ".next");
  const manifestProps = createProperties(nextConfig.manifest);

  return {
    ...nextConfig,
    webpack(config, options) {
      const {
        isServer,
        // webpack,
        // buildId,
        // dev,
        // config: {
        //   distDir = ".next",
        //   pwa = {},
        //   pageExtensions = ["tsx", "ts", "jsx", "js", "mdx"],
        //   experimental = {},
        // },
      } = options;

      if (
        !isServer &&
        [PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD].includes(
          nextComposePlugins.phase
        )
      ) {
        writeFiles(manifestProps).then(() =>
          console.log("Created manifest files")
        );
      }
      return config;
    },
    env: {
      ...nextConfig.env,
      manifestProps: JSON.stringify(manifestProps),
    },
  };
};
