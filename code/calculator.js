function calculator(operator, a, b) {
	switch (operator) {
		case '+':
			return Number(a) + Number(b);
		case '-':
			return a - b;
		case '*':
			return a * b;
		case '/':
			if (b === 0 || b === '0') {
				return 'ERROR...ERROR';
			} else {
				return a / b;
			}
	}
}
module.exports = calculator;
