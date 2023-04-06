const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return  a-b;
};

const sum = function(array) {
	let count = 0;
  for (let num of array){
    count += num;
  }

  return count;
};

const multiply = function(array) {
  let prod = 1;
  for (let num of array){
    prod *= num;
  }

  return prod;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	let prod = 1;
  if (a== 0){
    return prod;
  }
  
  for (let i= a; i<= 1; i--){
    prod *= i;
  }
  return prod;
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
