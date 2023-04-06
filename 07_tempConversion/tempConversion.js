const convertToCelsius = function(x) {
  let temp = (x- 32)*(5/9);
  if (temp!= 0){
    temp = temp.toFixed(1);
  }
  return temp;
};

const convertToFahrenheit = function(x) {
  
  let temp = (5/9)*x + 32;
  if (temp != 0){
    temp = temp.toFixed(1);
  }
  return temp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
