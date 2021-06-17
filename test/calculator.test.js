const calculator = require('../code/calculator');

test('add', () => {
	expect(calculator('+', 23, 2)).toBe(25);
});

test('substract', () => {
	expect(calculator('-', 23, 2)).toBe(21);
});

test('multiply', () => {
	expect(calculator('*', 23, 2)).toBe(46);
});

test('divide', () => {
	expect(calculator('/', 20, 2)).toBe(10);
});

test('error divide', () => {
	expect(calculator('/', 23, 0)).toBe('ERROR...ERROR');
});
