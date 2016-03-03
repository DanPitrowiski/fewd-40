
 $( document ).ready(function() {
  });


// when you click on the dropdown, you're shown the city
// options available to you.

// no html for this. So we need to add in the <select> as the
// javascript, then <options>, then end the slect


var city = ['NYC','SF','LA','ATX','SYD','PARIS','BOSTON','NV','RIO','BERLIN','CHICAGO','PHILLY','DANTOPIA'];


  var text_input = $('#city-type');
  
  	for (i=0 ; i < city.length ; i++ ) {
		$('select').append("<option>"+city[i]+"</option>");
	}


$( "select" ).change( function() {
	
	$( '.dropdown-placeholder' ).css( 'display','none' );
	x.pause(); 
	$('#simcity').css('display','none');

	var selected = $('#city-type').val();


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

	else if (selected === 'BOSTON') {
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

 
 // AUDIO CONTROLS

 var x = $('#simcityaudio')[0]; 

 function playAudio() { 
    x.play(); 
 } 

 function pauseAudio() { 
    x.pause(); 
} 

