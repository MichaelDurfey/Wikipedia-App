
$(document).ready(function (){
    $('#submitButton').click( function () { 
      var searchTerm = $('#userInput').val();

      $.get('/wikipediaSearch', {searchTerm}, function(d) { 
        d = JSON.parse(d);
        // console.log(d);
        var html = "";
        var newArray = [];

          d.forEach(function (value) { 
            if (d.indexOf(value) != 0) {
              var keys = Object.keys(value);
              
              d.find(function(element, index, array) {
                  if (index === index) {
                  newArray.push(element[index]);
                  }
                  console.log(newArray);
              })
              // var html = "";
              // for (var i = 0; i <= value.length - 1; i ++) {
              //     console.log(value[i])
              //       array.push(value[i])
              //        html += "<div class = 'resultDiv' style = 'background-color: #F7F8F9; border-radius: 10px;'>";
              //         html += "<p class = 'resultText' style = 'color: black' id = 'resultText'>";
              //         html += value[i];
              //         html += "</p>";
              //         html += "</div><br>";             
              //   }
              }
            })
          $('#searchResultContainer').html(`${html}`);
          })
      })
    });