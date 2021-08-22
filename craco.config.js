module.exports = {
  webpack: {
      configure: (webpackConfig, {env, paths}) => {
          return {
              ...webpackConfig,
              entry: {
                  main: [env === 'development' && require.resolve('react-dev-utils/webpackHotDevClient'),paths.appIndexJs].filter(Boolean),
                  content: './src/chromeServices/DOMEvaluator.ts',
                  background: './src/backgroundServices/background.ts',
              },
              output: {
                  ...webpackConfig.output,
                  filename: '[name].js',
              },
              optimization: {
                  ...webpackConfig.optimization,
                  runtimeChunk: false,
              }
          }
      },
  }
}
