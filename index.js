
var searchTerm = 
$.get(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchTerm}&limit=10&namespace=0&format=json`, function(a) {
  $("body").append(a);
});