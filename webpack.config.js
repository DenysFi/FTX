const path = require('path');

module.exports = {
  // ... другие настройки ...

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // ... другие лоадеры ...

          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'FTX/img/footer/', // Измените эту строку
              publicPath: (url) => path.join('FTX/img/footer/', url),
            },
          },
        ],
      },
    ],
  },
};
