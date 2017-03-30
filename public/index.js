
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
        var newArray = [];
        var html = "";
          for (var n = 1; n <= 1; n++){ 
            for (var i = 0; i <= d[n].length - 1; i++) { 
                        
              var result = function(){
              this.h1 = d[1][i];
              this.description = d[2][i];
              this.url = d[3][i];
              }

              var resultDiv = new result();

              let hasTitle = resultDiv.h1 !== '' && resultDiv.h1 !== undefined;
              let hasDesc  = resultDiv.description !== '' && resultDiv.description !== undefined;
              
              if (hasTitle) {
                html += `
                      <div
                        class='resultDiv'
                        style='background-color: #F7F8F9; border-radius: 10px;'
                        onclick="window.open('${resultDiv.url}');"
                      >
                        <h1 class='resultText' style='color: black' id='resultText'>
                          ${resultDiv.h1}
                        </h1>
                        <br>
                        <p class='resultText' style='color: black' id='resultText'>
                          ${hasDesc ? resultDiv.description : 'No summary returned :('}
                        </p>
                        <br>
                      </div>
                      <br>`
              }           
              if (resultDiv.h1 === undefined) {
                console.log("cannot get");
              }
            }
          }
          $('#searchResultContainer').html(`${html}`); 
        })  
      })
    })