module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: false
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: ['@babel/plugin-transform-runtime']
}
