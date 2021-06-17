const caesarCipher = require('../code/caesar_cipher');

test('1', () => {
	expect(caesarCipher('abc', 1)).toBe('bcd');
});

test('2', () => {
	expect(caesarCipher('xyz', 2)).toBe('zab');
});

test('3', () => {
	expect(caesarCipher('xyz/:;,?', 2)).toBe('zab/:;,?');
});

test('4', () => {
	expect(caesarCipher(':;,?', 1)).toBe(':;,?');
});
