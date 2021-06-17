function capitalize(word) {
	const string = word.charAt(0).toUpperCase() + word.slice(1);
	return string;
}
module.exports = capitalize;
