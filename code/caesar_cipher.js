function caesarCipher(string, number) {
	// ascii 65 to 90 => A..Z
	// ascii 97 to 122 => a..z
	let newString = []; // array to store the ascii of each character of the string
	[...string].forEach((char) => {
		newString.push(char.charCodeAt(0));
	});
	let finalString = [];
	newString.forEach((i) => {
		//lowercase
		if (i >= 97 && i <= 122) {
			if (i + number > 122) {
				// z
				let newChar = i + number - 122 + 96;
				return finalString.push(String.fromCharCode(newChar));
			} else {
				// no z
				let newChar = i + number;
				return finalString.push(String.fromCharCode(newChar));
			}
		} // uppercase
		else if (i >= 65 && i <= 90) {
			if (i + number > 90) {
				// z
				let newChar = i + number - 90 + 64;
				return finalString.push(String.fromCharCode(newChar));
			} else {
				//no z
				let newChar = i + number;
				return finalString.push(String.fromCharCode(newChar));
			}
		} // space and special char
		else {
			let newChar = i;
			return finalString.push(String.fromCharCode(newChar));
		}
	});
	newString = finalString.join('');
	return newString;
}
module.exports = caesarCipher;
