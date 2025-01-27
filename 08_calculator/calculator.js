const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(v) {
	return v.reduce(add, 0);
};

const multiply = function(v) {
  return v.reduce( (product, currentValue) => product * currentValue, 1 );
};

const power = function(x, n) {
	let product = 1;
  for (let i = 1; i <= n; i++) 
    product *= x;
  return product;
};

const factorial = function(n) {
	let product = 1;
  for (let i = 1; i <= n; i++) 
    product *= i;
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
