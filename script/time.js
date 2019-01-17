function getTime() {
  var regexp = /2[0-3]:[0-5]\d|[0-1]*\d:[0-5]\d/;
  var dinner = 'dinner at 20:55';
  console.log(dinner.match(regexp));
}

getTime();
