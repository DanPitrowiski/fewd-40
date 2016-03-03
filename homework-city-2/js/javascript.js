
 $( document ).ready(function() {
  });


//

// when you click on the dropdown, you're shown the city
// options available to you.

// no html for this. So we need to add in the <select> as the
// javascript, then <options>, then end the slect


var city = ['NYC','SF','LA','ATX','SYD','PARIS','MASS','NV','RIO','BERLIN','CHICAGO','PHILLY','DANTOPIA'];


  var text_input = $('#city-type');
  
  for (i=0 ; i < city.length ; i++ ) {

	$('select').append("<option>"+city[i]+"</option>");
}


$( "select" ).change( function() {
	console.log("YES");
	x.pause(); 
	$('#simcity').css('display','none');

	var selected = $('#city-type').val();

	if (selected === "Select a city") {

	}

	if (selected === 'NYC') {
		$( 'body' ).attr( 'class','nyc' );
	}

	else if (selected === 'SF') {
		$( 'body' ).attr( 'class','sf' );
	}

	else if (selected  === 'LA') {
		$( 'body' ).attr( 'class','la' );
	}

	else if (selected === 'ATX') {
		$( 'body' ).attr( 'class','austin' );
	}

	else if (selected === 'SYD') {
		$( 'body' ).attr( 'class','sydney' );
	}

	else if (selected === 'PARIS') {
		$( 'body' ).attr( 'class','paris' );
	}

	else if (selected === 'MASS') {
		$( 'body' ).attr( 'class','boston' );
	}
	else if (selected === 'NV') {
		$( 'body' ).attr( 'class','nashville' );
	}
	else if (selected === 'RIO') {
		$( 'body' ).attr( 'class','rio' );
	}
	else if (selected === 'BERLIN') {
		$( 'body' ).attr( 'class','berlin' );
	}
	else if (selected === 'CHICAGO') {
		$( 'body' ).attr( 'class','chicago' );
	}
	else if (selected === 'PHILLY') {
		$( 'body' ).attr( 'class','philly' );
	}

	else if (selected === 'DANTOPIA') {
		$( 'body' ).attr( 'class','dan' );
		$( '#simcity').html( 'Local Scientists Conclude: Kitties Like Fish, Dogs Less Picky'+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+'\n\u2022'+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+'Cats Demand Longer Breaks, Cleaner Litter, Slower Mice'+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+'\n\u2022'+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+'Typist Involved In Winter Traffic Accident, White-Out Conditions Blamed'+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+'\n\u2022'+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+'Broccoli Found To Cause Grumpiness In Children'+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+'\n\u2022'+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+'Cat Hijacks Municipal Bus; Riders Applaud Good Timing At Stops And Courteous Meows');
		$('#simcity').css('display','inherit');
		playAudio();
	}

});

// 	// ERRORS

// 	else {
// 		$('#error').css('display','inherit');
// 		errorcount++;
// 			if (errorcount < 2) {
// 			$('#error').html('Try another city name');
// 			} 
// 			else if (errorcount === 2  ) {
// 				$('#error').html('Try another city name... like Dantopia perhaps');
// 				$('#error').css('background-color','#F38323');
// 			}
// 			else if  (errorcount > 2  ){
// 				$('#error').html('Headline from Dantopia Tribune \'I Was Framed, Jokes Local Artist\'');
// 				$('#error').css('background-color','#F34923');
// 			}

// 		}

// 	// ALWAYS DO THESE

// 	$('#city-type').val('').blur();

// 	var text_input = $('#city-type')[0];
// 	text_input.focus ();


// 	//RESETS PAGE BEFORE ADDING NEW CONTENT

// function resetPage() {
// 	$('#simcity').css('display','none');
// 	$( '#citipixmade' ).html( 'CitiPix' );
// 	pauseAudio();
// 	$( 'body' ).attr( 'class', '' );
// }

 
 // AUDIO CONTROLS

 var x = $('#simcityaudio')[0]; 

 function playAudio() { 
    x.play(); 
 } 

 function pauseAudio() { 
    x.pause(); 
} 

