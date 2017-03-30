
$(document).ready(function (){
  $(function(){ 
    $(document).keypress(function(e){
      if (e.which == 13){
      $('#submitButton').click();
      }
    })
  })
    $('#submitButton').on('click', function (){ 
      var searchTerm = $('#userInput').val();
      $.get('/wikipediaSearch', {searchTerm}, function(d) { 
        d = JSON.parse(d);
        // console.log(d);
        var newArray = [];

            if (d.indexOf(d) != 0) {  
        
              for (var i = 0; i <= d.length; i++) {
                      var result = function(item) {                     d
                      this.h1 = item[i];
                      this.description = item[i];
                      this.url = item[i];
                      }
                      var resultDiv = new result();
                    var html = "";

                    if (resultDiv.h1 !== '' && resultDiv.h1 !== undefined && resultDiv.description !== '' && resultDiv.description !== undefined) {
                    html += `<div class = 'resultDiv' style = 'background-color: #F7F8F9; border-radius: 10px;' onclick="window.open('${resultDiv.url}');">`;
                    html += "<h1 class = 'resultText' style = 'color: black' id = 'resultText'>";
                    html += resultDiv.h1;
                    html += "</h1><br>";
                    html += "<p class = 'resultText' style = 'color: black' id = 'resultText'>";
                    html += resultDiv.description;
                    html += "</p><br>";
                    html += "</div><br>";  
                    }

                    else if (resultDiv.h1 !== '' && resultDiv.h1 !== undefined && resultDiv.description == '' || resultDiv.description == undefined) {
                    html += `<div class = 'resultDiv' style = 'background-color: #F7F8F9; border-radius: 10px;' onclick="window.open('${resultDiv.url}');">`;
                    html += "<h1 class = 'resultText' style = 'color: black' id = 'resultText'>";
                    html += resultDiv.h1;
                    html += "</h1><br>";
                    html += "<p class = 'resultText' style = 'color: black' id = 'resultText'>";
                    html += "No summary returned :("
                    html += "</p><br>";
                    html += "</div><br>"; 
                    }
                    if (resultDiv.h1 === undefined) {
                      console.log("cannot get");
                    }
                };
              }
            }               
          )
        $('#searchResultContainer').html(`${html}`);
    })
  })