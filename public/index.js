
$(document).ready(function (){
    $('#submitButton').click( function () { 
      var searchTerm = $('#userInput').val();

      $.get('/wikipediaSearch', {searchTerm}, function(d) { 
        d = JSON.parse(d);
        // console.log(d);
        var html = "";
          d.forEach(function (value) { 
            if (d.indexOf(value) != 0) {
              value.forEach(function (secondValue) {
                var html = "";
                // console.log(secondValue);
                for (var i = 0; i <= value.length; i++) {
                  console.log(secondValue[i]);
                    if (i === 1) {
                      html += "<div class = 'resultDiv' style = 'background-color: #F7F8F9; border-radius: 10px;'>";
                      html += "<p class = 'resultText' style = 'color: black' id = 'resultText'>";
                      html += secondValue[i];
                      html += "</p>";
                      html += "</div><br>";
                    }

                }
                // console.log("secondValueIndex: " + d.indexOf(secondValue));
                // console.log("secondValue: " + secondValue);

                // if secondValue[secondKey]

              })
              // var keys = Object.keys(value);
              // console.log(d[keys])
              // if (value[keys] === value[1]) {
                // html += "<div class = 'resultDiv' style = 'background-color: #F7F8F9; border-radius: 10px;'>";
                // html += "<p class = 'resultText' style = 'color: black' id = 'resultText'>";
                // html += values;
                // html += "</p>"
                // html += "</div><br>";
              // }
              // for (var i = 0; i <= value.length; i++) {


              // }
              // console.log(keys);
              }

            // keys.forEach(function (value){ 
              // var values = value[keys]
            // })
            })
          $('#searchResultContainer').html(`${html}`);
          })
      })
    });