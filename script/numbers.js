getNumber();

function getNumber() {
  var numbers = '20 / 55';
  var regexp = /(-?\d+(?:\.\d+)?)\s*([-+*\/])\s*(-?\d+(?:\.\d+)?)/;
  console.log(numbers.match(regexp));
}

