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
      colors: {
        "google-blue": {
          100: "#1a73e8",
          200: "#0e55b1",
          300: "#0c4896"
        },
        "forms-color": {
          100: "#673ab7",
          200: "#57309c",
          300: "#46277d"
        }
      },
      inset: {
        "-10": "-10px",
        "10": "10px",
        "20": "20px",
        "22": "22px"
      },
      width: {
        "form-width": "450px"
      },
      backgroundImage: theme => ({
        "home-banner": "url('/home-banner.jpg') "
      })
    }
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    borderWidth: ["responsive", "hover", "focus"]
  },
  plugins: []
};
