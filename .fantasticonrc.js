module.exports = {
    inputDir: 'assets/icons', // (required)
    outputDir: 'assets/fonts/icon-pack', // (required)
    fontTypes: ['eot', 'woff', 'woff2'],
    assetTypes: ['css', 'html', 'json'],
    descent: 32,
    codepoints: {
      'check': 57344, // decimal representation of 0xe000
    },
    templates: {
      css: 'assets/fonts/template.css.hbs', // путь к вашему файлу template.css
    },
};