const arrayAnalysis = require('../code/array_analysis');

test('1', () => {
	expect(arrayAnalysis([1, 8, 3, 4, 2, 6])).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	});
});
