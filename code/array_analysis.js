function arrayAnalysis(arr) {
	return {
		average: arr.reduce((acc, cur) => acc + cur, 0) / arr.length,
		min: Math.min(...arr),
		max: Math.max(...arr),
		length: arr.length,
	};
}
module.exports = arrayAnalysis;
