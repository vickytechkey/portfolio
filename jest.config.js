module.exports = {
    transform: {
        "^.+\\.js$": "babel-jest",
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|pdf)$':
        './fileTransformer.js',
        "\\.(css|less)$": ["jest-transform-css", { modules: true }]
    },
  };