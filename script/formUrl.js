function createURL(templateURL, params) {
  for (var key in params) {
    templateURL = templateURL.replace('{'+ key +'}', params[key]);
  }
  return templateURL;
}

var url = createURL('/api/countries/{country}/region/{region}/', {country: 'Ukraine', region: 'Kyev'});
console.log(url);