
$(document).ready(function (){
    $('#submitButton').click( function () { 
      var searchTerm = $('#userInput').val();
        $.get('/wikipediaSearch', {searchTerm}, function(d) { 
          d = JSON.parse(d);
            var html = "";
            console.log(d);
            d.forEach(function (value) { 
            var keys = Object.keys(value);
            html += "<div class = 'resultDiv'>";
            keys.forEach(function(key) {
              html += value[key];
            })
            html += "</div><br>";
          })

          $('#searchResultContainer').html(`${html}`);

        })
    })
});