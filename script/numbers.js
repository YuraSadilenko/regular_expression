getNumber();

function getNumber() {
  var numbers = '1 + 2';
  var regexp = /(-?\d+(?:\.\d+)?)\s*([-+*\/])\s*(-?\d+(?:\.\d+)?)/;
  console.log(numbers.match(regexp));
}

