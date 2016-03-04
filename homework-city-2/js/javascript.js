
 $( document ).ready(function() {
  });


// when you click on the dropdown, you're shown the city
// options available to you.

// no html for this. So we need to add in the <select> as the
// javascript, then <options>, then end the slect


var city = ['NYC','SF','LA','ATX','SYD','PARIS','BOSTON','NSH','RIO','BERLIN','CHICAGO','PHILLY','DANTOPIA'];


  var text_input = $('#city-type');
  
  	for (i=0 ; i < city.length ; i++ ) {
		$('select').append("<option>"+city[i]+"</option>");
	}


$( "select" ).change( function() {

	$('#citipixmade').html("The beautiful cities of Citipix");
	
	$( '.dropdown-placeholder' ).css( 'display','none' );
	x.pause(); 
	$('#simcity').css('display','none');

	var selected = $('#city-type').val();


	if (selected === 'NYC') {
		$( 'body' ).attr( 'class','nyc' );
		$( '#cityname' ).html( 'New York City' );
	}

	else if (selected === 'SF') {
		$( 'body' ).attr( 'class','sf' );
		$( '#cityname' ).html( 'San Francisco' );
	}

	else if (selected  === 'LA') {
		$( '#cityname' ).html( 'Los Angeles' );
		$( 'body' ).attr( 'class','la' );
	}

	else if (selected === 'ATX') {
		$( 'body' ).attr( 'class','austin' );
		$( '#cityname' ).html( 'Austin' );
	}

	else if (selected === 'SYD') {
		$( 'body' ).attr( 'class','sydney' );
		$( '#cityname' ).html( 'Sydney' );
	}

	else if (selected === 'PARIS') {
		$( 'body' ).attr( 'class','paris' );
		$( '#cityname' ).html( 'Paris' );
	}

	else if (selected === 'BOSTON') {
		$( 'body' ).attr( 'class','boston' );
		$( '#cityname' ).html( 'Boston' );
	}

	else if (selected === 'NSH') {
		$( 'body' ).attr( 'class','nashville' );
		$( '#cityname' ).html( 'Nashville' );
	}

	else if (selected === 'RIO') {
		$( 'body' ).attr( 'class','rio' );
		$( '#cityname' ).html( 'Rio' );
	}

	else if (selected === 'BERLIN') {
		$( 'body' ).attr( 'class','berlin' );
		$( '#cityname' ).html( 'Berlin' );
	}

	else if (selected === 'CHICAGO') {
		$( 'body' ).attr( 'class','chicago' );
		$( '#cityname' ).html( 'Chicago' );
	}

	else if (selected === 'PHILLY') {
		$( 'body' ).attr( 'class','philly' );
		$( '#cityname' ).html( 'Philly' );
	}

	else if (selected === 'DANTOPIA') {
		$( 'body' ).attr( 'class','dan' );
		$( '#cityname' ).html( 'Dantopia' );
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

