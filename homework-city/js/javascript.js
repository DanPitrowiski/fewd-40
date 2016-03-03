 
// input city-name
// return or hit submit
// Do preventDefault() to make sure page doesn't reload
// Remove previous error message
// turn city-name into variable in javascript
// standardize city-name to lower-case or uppercase to make consistent
//

// If var city-name === city names from list
//  {
// 	remove current class of city from body
// 	add new city class to body
//  Add City name to header
//  Add Citipix name to subheader
//  }
//  else display error message
//


window.onload = function(){
  var text_input = $('#city-type');
  text_input.focus ();
}

 $( document ).ready(function() {
  });

 var errorcount = 0;
 errorcount = parseFloat(errorcount);


$('#entry').on('submit', function(e){
	e.preventDefault();

	$('#error').css('display','none');
	var city = $('#city-type').val();
	var city = city.trim().toUpperCase();


	// FIND CITY MATCHES

	if ((city === 'NEW YORK') || (city === 'NYC') || (city === 'NEW YORK CITY')) {
		resetPage();
		$( 'body' ).addClass( 'nyc' );
		$('#cityname').text("New York");
	}

	else if ((city === 'SAN FRANCISCO') || (city === 'SF') || (city === 'BAY AREA')) {
		resetPage();
		$( 'body' ).addClass( 'sf' );
		$('#cityname').html( 'San Francisco' );
	}

	else if ((city === 'LOS ANGELES') || (city === 'LA') || (city === 'LAX')) {
		resetPage();
		$( 'body' ).addClass( 'la' );
		$('#cityname').html('Los Angeles');
	}

	else if ((city === 'AUSTIN') || (city === 'ATX')) {
		resetPage();
		$( 'body' ).addClass( 'austin' );
		$('#cityname').html('Austin');
	}

	else if ((city === 'SYDNEY') || (city === 'SYD')) {
		resetPage();
		$( 'body' ).addClass( 'sydney' );
		$( '#cityname' ).html( 'Sydney' );
	}

	else if ((city === 'PARIS') || (city === 'FRANCE')) {
		resetPage();
		$( 'body' ).addClass( 'paris' );
		$( '#cityname' ).html( 'Paris' );
	}

	else if ((city === 'BOSTON') || (city === 'BEANTOWN')) {
		resetPage();
		$( 'body' ).addClass( 'boston' );
		$( '#cityname' ).html( 'Boston' );
	}

	else if ((city === 'NASHVILLE') || (city === 'MUSIC CITY')) {
		resetPage();
		$( 'body' ).addClass( 'nashville' );
		$( '#cityname' ).html( 'Nashville' );
	}
	else if ((city === 'RIO') || (city === 'RIO DE JANEIRO')) {
		resetPage();
		$( 'body' ).addClass( 'rio' );
		$( '#cityname' ).html( 'Rio De Janeiro' );
	}
	else if ((city === 'BERLIN') || (city === 'GERMANY')) {
		resetPage();
		$( 'body' ).addClass( 'berlin' );
		$( '#cityname' ).html( 'Berlin' );
	}
	else if ((city === 'CHICAGO') || (city === 'THE WINDY CITY') || (city === 'WINDY CITY') || (city === 'CHI TOWN') || (city === 'CHI-TOWN')) {
		resetPage();
		$( 'body' ).addClass( 'chicago' );
		$( '#cityname' ).html( 'Chicago' );
	}
	else if ((city === 'PHILLY') || (city === 'PHILADELPHIA')) {
		resetPage();
		$( 'body' ).addClass( 'philly' );
		$( '#cityname' ).html( 'Philadelphia' );
		}
	else if (city === 'MARQUEE') {
		$('#simcity').css('display','none');
	}

	else if ((city === 'DAN') || (city === 'DANTOPIA') || (city === 'DJP')) {
		resetPage();
		playAudio();
		$( '#simcity').html( 'Local Scientists Conclude: Kitties Like Fish, Dogs Less Picky'+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+'\n\u2022'+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+'Cats Demand Longer Breaks, Cleaner Litter, Slower Mice'+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+'\n\u2022'+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+'Typist Involved In Winter Traffic Accident, White-Out Conditions Blamed'+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+'\n\u2022'+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+'Broccoli Found To Cause Grumpiness In Children'+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+'\n\u2022'+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+'Cat Hijacks Municipal Bus; Riders Applaud Good Timing At Stops And Courteous Meows');
		$( '#cityname' ).html( 'Dantopia' );
		$('#simcity').css('display','inherit');
		$( 'body' ).addClass( 'dan' );
	}

	// ERRORS

	else {
		$('#error').css('display','inherit');
		errorcount++;
			if (errorcount < 2) {
			$('#error').html('Try another city name');
			} 
			else if (errorcount === 2  ) {
				$('#error').html('Try another city name... like Dantopia perhaps');
				$('#error').css('background-color','#F38323');
			}
			else if  (errorcount > 2  ){
				$('#error').html('Headline from Dantopia Tribune \'I Was Framed, Jokes Local Artist\'');
				$('#error').css('background-color','#F34923');
			}

		}

	// ALWAYS DO THESE

	$('#city-type').val('').blur();

	var text_input = $('#city-type')[0];
	text_input.focus ();

});


	//RESETS PAGE BEFORE ADDING NEW CONTENT

function resetPage() {
	$('#simcity').css('display','none');
	$( '#citipixmade' ).html( 'CitiPix' );
	pauseAudio();
	$( 'body' ).attr( 'class', '' );
}

 
 // AUDIO CONTROLS

 var x = $('#simcityaudio')[0]; 

 function playAudio() { 
    x.play(); 
 } 

 function pauseAudio() { 
    x.pause(); 
} 
