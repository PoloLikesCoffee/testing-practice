const reverseString = require('../code/reverseString');

test('Reverse the string', () => {
	expect(reverseString('bonjour')).toBe('ruojnob');
	expect(reverseString('au revoir')).toBe('riover ua');
	expect(reverseString('ohaYO')).toBe('OYaho');
	expect(reverseString('sayonara')).toBe('aranoyas');
});
