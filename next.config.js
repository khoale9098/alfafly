const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: !!process.env.BUNDLE_ANALYZE,
})

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  const isProd = phase === PHASE_PRODUCTION_BUILD
  const isStaging = process.env.STAGING === '1'

  const nodeEnv = (() => {
    if (isStaging) return 'staging'
    if (isProd) return 'production'
    return 'development'
  })()
  console.log('ENV:', nodeEnv)

  const env = {
    development: {},
    staging: {},
    production: {},
  }[nodeEnv]
  //next.config.js
  return bundleAnalyzer({
    env,
  })
}
