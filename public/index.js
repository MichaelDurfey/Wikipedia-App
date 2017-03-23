
$(document).ready(function (){
var searchTerm = document.getElementById("userInput");
$.get(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchTerm}&limit=10&namespace=0&format=json`)
.then(a => {
  console.log(a);
});


// console.log(searchTerm);
})