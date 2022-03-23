module.exports = api => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
     
      ['module-resolver', {
        alias: {
          '@': './src',
          '@components': './src/components',
          '@store': './src/store',
          '@utils': './src/utils',
          '@services': './src/services'
        }
      }]
    ],
  };
};