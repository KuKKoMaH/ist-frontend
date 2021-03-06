const fs = require('fs');
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');

const config = require('../config');

module.exports = function() {
  return imagemin([config.imgPath + '/*.{jpg,jpeg,png}'], config.imgPath, {
    plugins: [
      imageminMozjpeg({ quality: 80 }),
      imageminPngquant({quality: '65-80'})
    ]
  });
};