const convertToCelsius = function(temp) {
	const tempFahrenheit = temp;
	let tempCelsius = (tempFahrenheit - 32) * (5/9);
	return round(tempCelsius, 1);
};

const convertToFahrenheit = function(temp) {
	const tempCelsius = temp;
	let tempFahrenheit = tempCelsius * (9/5) + 32;
	return round(tempFahrenheit, 1);
};

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
