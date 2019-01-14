function getTime() {
  var dinner = 'dinner at 9:00';
  var regexp = /2[0-3]|[0-1]*\d:[0-5]\d/;
  console.log(dinner.match(regexp));
}

getTime();
