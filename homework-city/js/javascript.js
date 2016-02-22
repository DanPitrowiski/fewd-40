 
// input city-name
// return or hit submit
// Do preventDefault() to make sure page doesn't reload
// turn city-name into variable in javascript
// standardize city-name to lower-case or uppercase to make consistent

// If city-name === "names"
// 	remove current class of city from body
// 	add body background of new city

// else display error message

window.onload = function(){
  var text_input = document.getElementById ('city-type');
  text_input.focus ();
}

 $( document ).ready(function() {
  });

 var dancount = 0;

 dancount = parseFloat(dancount);


$('#entry').on('submit', function(e){
	e.preventDefault();

	$('#error').css('display','none');
	var city = $('#city-type').val();
	var city = city.trim().toUpperCase();

	if ((city === "NEW YORK") || (city === "NYC") || (city === "NEW YORK CITY")) {
		removeBackground();
		$( "body" ).addClass( "nyc" );
	}

	else if ((city === "SAN FRANCISCO") || (city === "SF") || (city === "BAY AREA")) {
		removeBackground();
		$( "body" ).addClass( "sf" );
	}

	else if ((city === "LOS ANGELES") || (city === "LA") || (city === "LAX")) {
		removeBackground();
		$( "body" ).addClass( "la" );
	}

	else if ((city === "AUSTIN") || (city === "ATX")) {
		removeBackground();
		$( "body" ).addClass( "austin" );
	}

	else if ((city === "SYDNEY") || (city === "SYD")) {
		removeBackground();
		$( "body" ).addClass( "sydney" );
	}

	else if ((city === "PARIS") || (city === "FRANCE")) {
		removeBackground();
		$( "body" ).addClass( "paris" );
	}

	else if ((city === "BOSTON") || (city === "BEANTOWN")) {
		removeBackground();
		$( "body" ).addClass( "boston" );
	}

	else if ((city === "NASHVILLE") || (city === "MUSIC CITY")) {
		removeBackground();
		$( "body" ).addClass( "nashville" );
	}
	else if ((city === "RIO") || (city === "RIO DE JANEIRO")) {
		removeBackground();
		$( "body" ).addClass( "rio" );
	}
	else if (city === "MARQUEE") {
		$('#simcity').css('display','none');;
	}

	else if ((city === "DAN") || (city === "DANTOPIA") || (city === "DJP")) {
		removeBackground();
		document.getElementById('simcity').innerHTML = "Local Scientists Conclude: Kitties Like Fish, Dogs Less Picky"+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"\n\u2022"+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"Cats Demand Longer Breaks, Cleaner Litter, Slower Mice"+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"\n\u2022"+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"Typist Involved In Winter Traffic Accident, White-Out Conditions Blamed";
		$('#simcity').css('display','inherit');
		$( "body" ).addClass( "dan" );
	}

	// ERRORS

	else {
		$('#error').css('display','inherit');
		dancount = dancount + 1;
			if (dancount < 2) {
			document.getElementById('error').innerHTML = "Try another city name";
			} 
			else if (dancount === 2  ) {
				document.getElementById('error').innerHTML = "Try another city name... like Dantopia perhaps";
				$('#error').css('background-color','#F38323');
			}
			else if  (dancount > 2  ){
				document.getElementById('error').innerHTML = "Headline from Dantopia Tribune \"I Was Framed, Jokes Local Artist\"";
				$('#error').css('background-color','#F34923');
			}

		}

	// ALWAYS DO THESE

	$('#city-type').val('').blur();

	var text_input = document.getElementById ('city-type');
	text_input.focus ();

});


function removeBackground() {
	$( "body" ).removeClass( "rio nashville boston paris dan nyc sf la austin sydney" );
}
