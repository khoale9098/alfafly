const withNx = require('@nrwl/next/plugins/with-nx');
const { PHASE_PRODUCTION_BUILD } = require('next/constants');

const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: !!process.env.BUNDLE_ANALYZE,
});
/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/

module.exports = (phase) => {
  const isProd = phase === PHASE_PRODUCTION_BUILD;
  const isStaging = process.env.STAGING === '1';

  const nodeEnv = (() => {
    if (isStaging) return 'staging';
    if (isProd) return 'production';
    return 'development';
  })();
  console.log('ENV:', nodeEnv);

  const env = {
    development: {},
    staging: {},
    production: {},
  }[nodeEnv];

  return withNx(
    bundleAnalyzer({
      env,
      nx: {
        // Set this to false if you do not want to use SVGR
        // See: https://github.com/gregberge/svgr
        svgr: true,
      },
    })
  );
};
