module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      sans: ['"Open Sans"', "sans-serif"]
    },
    extend: {
      inset: {
        "-10": "-10px",
        "10": "10px"
      },
      backgroundImage: theme => ({
        "home-banner": "url('/home-banner.jpg') "
      })
    }
  },
  variants: {},
  plugins: []
};
