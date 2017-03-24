
$(document).ready(function (){
var searchterm = "";
  $('#submitButton').on('click', () => { 
    var searchTerm = document.getElementById('userInput').value;
    console.log(searchTerm);
  })

  $('#submitButton').on('click', () => { $.get(`/wikipediaSearch`, {searchTerm})
        .then(a => {
        a = JSON.parse(a);
        console.log(a);
        });
  });
})