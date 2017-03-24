
$(document).ready(function (){




$.get(`/wikipediaSearch`, {searchTerm}).then(a => {
  console.log(a);
});



})

var searchTerm = document.getElementById('userInput');