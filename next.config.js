module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: process.env.NODE_ENV === 'production' ? '/engineer-vocabulary-list/' : '',
}