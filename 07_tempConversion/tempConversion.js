const convertToCelsius = function(temp) {
  let newtemp = (temp-32)*5/9;
  return Math.round(newtemp * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  let newtemp = (temp*(9/5) + 32).toFixed(1);
  return Math.round(newtemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
