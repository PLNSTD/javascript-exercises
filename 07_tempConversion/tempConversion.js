const convertToCelsius = function(gradesToConvert) {
  gradesToConvert = (gradesToConvert - 32) * 5/9;
  return Math.round(gradesToConvert * 10) / 10;
};

const convertToFahrenheit = function(gradesToConvert) {
  gradesToConvert = (gradesToConvert * (9/5) + 32);
  return Math.round(gradesToConvert * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
