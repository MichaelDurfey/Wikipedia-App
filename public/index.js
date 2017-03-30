
$(document).ready(function (){
  $(function(){ 
    $(document).keypress(function(e){
      if (e.which == 13){
      $('#submitButton').click();
      }
    })
  })

    $('#submitButton').on('click', function (){ 
      $('#searchBarContainer').fadeIn().css({top:400,position:'fixed'}).animate({top:8, marginTop:'10px'}, 1000);
      $('#searchResultContainer').fadeIn().css({top:1000,position:'absolute'}).animate({top:136, marginTop: '10px'}, 1000);
    
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
              let hasDesc  = resultDiv.description !== '' && resultDiv.description !== undefined && resultDiv.description.slice(searchTerm.length, -1) !== " may refer to";
              let hasReferTo = resultDiv.description.slice(searchTerm.length, -1) === " may refer to";
            

              if (hasTitle) {
                html += `
                      <div
                        class='resultDiv'
                        style='background-color: #F7F8F9; border-radius: 0px;'
                        onclick="window.open('${resultDiv.url}');"
                        >
                        <h1 class='resultText' style='color: black; font-size: 18px; font-weight: bold' id='resultText' >
                          ${resultDiv.h1}
                        </h1>
                        <p class='resultText' style='color: black; font-size: 14px' id='resultText'>
                          ${hasDesc ? resultDiv.description : 'No summary returned :('}
                        </p>
                        </div>
                        `
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