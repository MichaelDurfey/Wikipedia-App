
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
              var key = Object.keys(value);
              // console.log("value: " + value)
              // console.log("key: " + key)

              for (var i = 0; i <= value.length; i++) {
                  var result = function() {
                    this.description = d[2][i];
                    this.url = d[3][i];
                  }
              var div1 = new result();
              div1.h1 = d[1][i]
              console.log(div1);
                }
              }
              // d.find(function(element, index, array) {
              //   for (var i = 0; i <= element.length; i ++) {
              //     if (key === element[key]) {
              //         console.log(element);
              //         html += "<div class = 'resultDiv' style = 'background-color: #F7F8F9; border-radius: 10px;'>";
              //         html += "<p class = 'resultText' style = 'color: black' id = 'resultText'>";
              //         html += element[index];
              //         html += "</p>";
              //         html += "</div><br>";     
              //     }
              //   }
              // })         
          })
          $('#searchResultContainer').html(`${html}`);
        })
      })
});