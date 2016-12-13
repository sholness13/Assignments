$( document ).ready(function() {
    console.log( "ready!" );

  //we need an input element, id, value
  //we need a button

  function changeBackground(){
    event.preventDefault();
  //define that function that runs when the button is clicked
  	//get that city name input from the input element
  	var cityInput = $("#city-type").val();

  	console.log(cityInput);
    
    //"New York" or "New York City" or "NYC" 
      if(cityInput =="NYC"|| cityInput == "New York City" || cityInput == "New York"){
        //make the background of the page nyc.jp
        $("body").css("background","url(nyc.jpg)","no-repeat", "center", "center", "fixed");
      } 

      else if (cityInput =="SF"|| cityInput == "San Francisco" || cityInput == "Bay Area"){
    //"San Francisco" or "SF" or "Bay Area" 
        //make the background of the page sf.jpg
        $("body").css("background","url(sf.jpg)");
      } 

      else if (cityInput =="LAX"|| cityInput == "Los Angeles" || cityInput == "LA"){
    //"Los Angeles" or "LA" or "LAX" 
        //make the background of the page la.jpg
        $("body").css("background","url(la.jpg)");
      } 

      else if (cityInput =="Austin"|| cityInput == "ATX"){
    //"Austin" or "ATX" 
        //make the background of the page austin.jpg
        $("body").css("background","url(austin.jpg)");
      } 

      else if (cityInput =="Sydney"|| cityInput == "SYD"){
    //"Sydney" or "SYD" 
        //make the background of the page sydney.jpg
        $("body").css("background","url(sydney.jpg)");
      }

  }

  //on button click, run a function to change the background based on the input
  $("#submit-btn").click(changeBackground);

});

