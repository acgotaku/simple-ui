module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-input-range': {},
    'postcss-nested': {},
    'postcss-custom-media': {
      importFrom: 'src/styles/media.css'
    }
  }
};
