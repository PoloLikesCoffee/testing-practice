function reverseString(word) {
	const firstStep = word.split('');
	const secondStep = firstStep.reverse();
	const lastStep = secondStep.join('');
	return lastStep;
}
module.exports = reverseString;
