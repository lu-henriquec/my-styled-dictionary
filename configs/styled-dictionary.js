module.exports = {
  getStyleDictionaryConfig(brand) {
    return {
      "source": [
        `tokens/brands/${brand}/**/*.json`
      ],
      "platforms": {
        "scss": {
          "transformGroup": "scss",
          "buildPath": `build/scss/${brand}/`,
          "prefix": "token",
          "files": [{
            "destination": "tokens.scss",
            "format": "scss/variables"
          }]
        },
        "css": {
          "transformGroup": "css",
          "buildPath": `build/css/${brand}/`,
          "prefix": "token",
          "files": [
            {
              "format": "css/variables",
              "destination": "tokens.css"
            }
          ]
        },
        "js": {
          "transformGroup": "js",
          "buildPath": `build/js/${brand}/`,
          "files": [{
            "destination": "tokens.js",
            "format": "javascript/module-flat"
          }]
        }
      }
    }
  },
  getStyleDictionaryConfigGlobal() {
    return {
      "source": [
        "tokens/globals/**/*.json"
      ],
      "platforms": {
        "scss": {
          "transformGroup": "scss",
          "buildPath": `build/scss/globals/`,
          "prefix": "token",
          "files": [{
            "destination": "tokens.scss",
            "format": "scss/variables"
          }]
        },
        "css": {
          "transformGroup": "css",
          "buildPath": `build/css/globals/`,
          "prefix": "token",
          "files": [
            {
              "format": "css/variables",
              "destination": "tokens.css"
            }
          ]
        },
        "js": {
          "transformGroup": "js",
          "buildPath": `build/js/globals/`,
          "files": [{
            "destination": "tokens.js",
            "format": "javascript/module-flat"
          }]
        }
      }
    }
  }
}