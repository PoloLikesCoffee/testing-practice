const capitalize = require('../code/capitalize');

test('Capitalize the string', () => {
	expect(capitalize('bonjour')).toBe('Bonjour');
	expect(capitalize('au revoir')).toBe('Au revoir');
	expect(capitalize('ohaYO')).toBe('OhaYO');
	expect(capitalize('sayonara')).toBe('Sayonara');
});
