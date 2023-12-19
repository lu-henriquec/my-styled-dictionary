const StyleDictionaryPackage = require('style-dictionary');
const { getStyleDictionaryConfig,getStyleDictionaryConfigGlobal } = require('./configs/styled-dictionary');
const { brands } = require('./configs/brands.json');

console.log('Build started...');

brands.map(function (brand) {

  console.log('\n==============================================');
  console.log(`\nProcessing: ${brand}`);

  const StyleDictionaryGlobals = StyleDictionaryPackage.extend(getStyleDictionaryConfigGlobal());
  const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(brand));

  StyleDictionaryGlobals.buildAllPlatforms();
  StyleDictionary.buildAllPlatforms();

  console.log('\nEnd processing');

})


console.log('\n==============================================');
console.log('\nBuild completed!');