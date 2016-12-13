$( document ).ready(function() {
    console.log( "ready!" );

//conversion
$("#submit").click(convertTemp);

//Multiply by 9, then divide by 5, then add 32
function convertTemp(){

	event.preventDefault();

	var celsiusInput = $("#temp_celsius").val();

	celsiusInput = parseFloat(celsiusInput)

		console.log(celsiusInput);

	var farOutput = celsiusInput * 9 / 5 + 32;

	$("#output").text(farOutput);
}

  function changeBackground(){
    event.preventDefault();
  //define that function that runs when the button is clicked
  	//get that city name input from the input element
  	var celsiusInput = $("#temp_celsius").val();
  		
  	celsiusInput = parseFloat(celsiusInput)

  		console.log(celsiusInput);
    
	    //"40>"
	      if(celsiusInput < 0){
	        //make the background of the page nyc.jp
	        $("body").css("background-image","url(cold.jpg)");
	      } 

	      else if (celsiusInput < 50){
	    //"41-60" 
	        //make the background of the page sf.jpg
	        $("body").css("background-image","url(warm.jpg)");
	      } 

	      else if (celsiusInput > 100){
	    //"61-75"
	        //make the background of the page la.jpg
	        $("body").css("background-image","url(hot.jpg)");
	      } 

	  }

	      $("#submit").click(changeBackground);

});

// input celsius temp

// react to click of submit button

// convert to fahrenheit

// out fahrenheit temp onto page
