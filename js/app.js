const display = document.querySelector('.display');
const numbers = document.querySelectorAll('input.number');
const clear = document.querySelector('input[value="clear"]');
const clearAll = document.querySelector('input[value="clear all"]');
const operators = document.querySelectorAll('.operator');
const sumBtn = document.querySelector('input[value="="]');
let tempNumber = '0';
let operator = '+';
let tempOperator = '';
let sum = null;

display.innerText = tempNumber;
numbers.forEach((number) => {
	number.addEventListener('click', () => {
		if (number.value == 0 && tempNumber == 0) return;
		tempNumber == 0 ? (tempNumber = number.value) : (tempNumber += number.value);
		display.innerText = tempNumber;
	});
});
clear.addEventListener('click', () => {
	tempNumber = '0';
	display.innerText = tempNumber;
});
clearAll.addEventListener('click', () => {
	tempNumber = '0';
	operator = '+';
	sum = null;
	display.innerText = tempNumber;
});
operators.forEach((op) => {
	op.addEventListener('click', () => {
		if (op.value !== operator && tempOperator !== '=') {
			if (tempNumber == 0) return;
				if (sum == null) {
					sum = Number(tempNumber);
					tempNumber = '0';
					display.innerText = tempNumber;
				}
				if (operator === '+') {
					sum += Number(tempNumber);
					display.innerText = sum;
					tempNumber = '0';
				}
				if (operator === '-') {
					sum -= Number(tempNumber);
					display.innerText = sum;
					tempNumber = '0';
				}
				if (operator === '/') {
					sum /= Number(tempNumber);
					display.innerText = sum;
					tempNumber = '0';
				}
				if (operator === '*') {
					sum *= Number(tempNumber);
					display.innerText = sum;
					tempNumber = '0';
				}
		}
		if (op.value === '+') operator = '+';
		if (op.value === '-') operator = '-';
		if (op.value === '/') operator = '/';
		if (op.value === 'x') operator = '*';
		tempOperator = op.value;
		if (tempNumber == 0) return;
		if (sum == null) {
			sum = Number(tempNumber);
			tempNumber = '0';
			display.innerText = tempNumber;
			return;
		}
		if (operator === '+') {
			sum += Number(tempNumber);
			display.innerText = sum;
			tempNumber = '0';
			return;
		}
		if (operator === '-') {
			sum -= Number(tempNumber);
			display.innerText = sum;
			tempNumber = '0';
			return;
		}
		if (operator === '/') {
			sum /= Number(tempNumber);
			display.innerText = sum;
			tempNumber = '0';
			return;
		}
		if (operator === '*') {
			sum *= Number(tempNumber);
			display.innerText = sum;
			tempNumber = '0';
			return;
		}
	});
});
