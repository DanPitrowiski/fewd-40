 var message;
 var playerTurn;

// ******************************************
// * START GAME
// ******************************************

 $( document ).ready(function() {
 	$( "#popover" ).html("<form id='entry'><img src='images/hero.png'><h2>Choose the name of your hero</h2><input type='text' id='hero-name' placeholder='Choose a hero name...'><input type='submit' value='Update' id='submit-btn'></form>");
 	$( "#popover" ).addClass('popover-bg');
 	var text_input = $('#entry');
  	text_input.focus ();
  	setFightInfo();
  });

	$( document ).ready(function() {
		$('#entry').on('submit', function(e){
			e.preventDefault();
			e.stopImmediatePropagation();
			x.play(); 
			var name = $( '#hero-name' ).val();
		 	hero.name = name;
		 	$( "#entry" ).css('display','none');
		 	$( "#popover" ).fadeOut(2000);
		 	// $( "#popover" ).css('background-color','rgba(0,0,0,0)');
		 	$( "#hero-stats>.ch-name>.bold-stat").text(hero.name);

		    alertMessage(zombieBob.name + " won't let you pass. Time for a fight!");
			})});


// ******************************************
// * ATTACK START
// ******************************************

$('.attack-f').click( function(){
	playerTurn = true;
	$('.fight-button').addClass('turnoffbuttons');
	hitting(hero, zombieBob);
});

$('.alert-button').click( function(){
	playerTurn = false;
	console.log(playerTurn);
	hitting(zombieBob,hero);
	$('.fight-button').removeClass('turnoffbuttons');
	$( ".alert-button" ).css('display','none');
});


// ******************************************
// * HITTING CALCULATION
// ******************************************

function hitting(attacker, defender){
	
	var hitChance = Math.floor((Math.random() * (attacker.accuracy+defender.accuracy)) + 1);
	console.log(hitChance);

	if ( hitChance <= attacker.accuracy) {
		damage(attacker, defender);
	}
	else {
		message = ( attacker.name + " missed " + defender.name );
		console.log(message);
		alertMessage(message);
	}

}

// ******************************************
// * DAMAGE CALCULATION
// ******************************************

function damage(attacker, defender){

	console.log("In damage function");

	var attackerMaxDmg = parseFloat(attacker.weapon[2]);
	var attackerMinDmg = parseFloat(attacker.weapon[1]);
	var defenderToughness = parseFloat(defender.toughness);
	var attackerStrength = parseFloat(attacker.strength);

	var dmgRandom = Math.floor((Math.random() * (attackerMaxDmg-attackerMinDmg) ) + attackerMinDmg);

	var dmgReceived = dmgRandom * (attackerStrength/defenderToughness);

	dmgReceived = Math.floor(dmgReceived);

	message = ( attacker.name + " hit " + defender.name +" dealing " + dmgReceived + " damage.");
	console.log(message);

	alertMessage(message);
	defender.hitPointsCurrent = defender.hitPointsCurrent -  dmgReceived;
	setFightInfo();

};

// ******************************************
// * ALL ALERT NOTIFICATIONS
// ******************************************

function alertMessage(message){
		// $( '.game-alerts' ).promise().then(function(){
			$( ".game-alerts" ).fadeIn(500).html(message);
			if (playerTurn === true){
				$( ".alert-button" ).fadeIn(500).css('display','block');
			}
	// });
}

// ******************************************
// * RESETTING PAGE INFO
// ******************************************

function setFightInfo(){
	$( "#enemyone-name").text(zombieBob.name);

	$( "#enemyone-level").text(zombieBob.level);
	$( "#hero-level").text(hero.level);

	if (zombieBob.hitPointsCurrent <= 0 ){
		zombieBob.hitPointsCurrent = 0; 
		enemyKilled(zombieBob.name);
	}
	if (hero.hitPointsCurrent < 0 ){
		hero.hitPointsCurrent = 0; 
		death();
	}

	var enemyhealth = (zombieBob.hitPointsCurrent + "/" + zombieBob.hitPoints);
	var herohealth = (hero.hitPointsCurrent + "/" + hero.hitPoints);

		$( '.game-alerts' ).promise().done(function(){
			$( "#enemyone-health").text(enemyhealth);
			$( "#hero-health").text(herohealth);
		});
}

// ******************************************
// * STAT HOVER
// ******************************************

$( '#hero-ui' ).hover( 
	function() {
		$('.hero-stats').css('display','-webkit-box');
		var heroStats = ( 
			"<span class='statnum'>" + hero.name + "</span></br>" +
			hero.type + "</br></br>" + 
			"<span class='statnum'>" + hero.accuracy + "</span> ACCURACY </br>" + 
			"<span class='statnum'>" + hero.strength + "</span> STRENGTH </br>" +
			"<span class='statnum'>" + hero.toughness + "</span> TOUGHNESS </br>" + 
			"<span class='statnum'>" + hero.speed + "</span> SPEED </br>" + 
			"<span class='statnum'>" + hero.luck + "</span> LUCK</br>" +
			"<span class='statnum'>" + hero.weapon[0] + "</span> dmg " + hero.weapon[1] + "-" + hero.weapon[2] + "</br>" );
		$( '.hero-stats').html(heroStats); 

	}, function() {
    	$( '.hero-stats' ).css('display','none');
  }
  );

$( '#enemy-ui-one' ).hover( 
	function() {
		$('.enemy-stats').css('display','-webkit-box');
		var enemyStats = ( 
			"<span class='statnum'>" + zombieBob.name + "</span></br>" +
			zombieBob.type + "</br></br>" + 
			"<span class='statnum'>" + zombieBob.accuracy + "</span> ACCURACY </br>" + 
			"<span class='statnum'>" + zombieBob.strength + "</span> STRENGTH </br>" +
			"<span class='statnum'>" + zombieBob.toughness + "</span> TOUGHNESS </br>" + 
			"<span class='statnum'>" + zombieBob.speed + "</span> SPEED </br>" + 
			"<span class='statnum'>" + zombieBob.luck + "</span> LUCK</br>" +
			"<span class='statnum'>" + zombieBob.weapon[0] + "</span> dmg " + zombieBob.weapon[1] + "-" + zombieBob.weapon[2] + "</br>" );
		$( '.enemy-stats').html(enemyStats); 

	}, function() {
    	$( '.enemy-stats' ).css('display','none');
  }
  );

// ******************************************
// * DEATH
// ******************************************

function death(){
	$( '.game-alerts').css('display','none');
	$('.reload').fadeIn(2000).css('display','block');
	$('.popover-bg').fadeIn(2000).show();
	$( "#death" ).fadeIn(2000).show();
	};

function enemyKilled(defender){
	$('#enemy-ui-one').fadeOut(3000);
	$('#enemyone').fadeOut(3000);
	$('.alert-button').css('display','none');
	$('#fight-menu').hide();
	playerTurn = false;
	alertMessage("You've killed " + zombieBob.name);
}

 // RELOAD AFTER YOUR DEATH

$('.reload').click(function() {
    // location.reload();

	var heroRevive = parseFloat(hero.hitPoints);
	hero.hitPointsCurrent = heroRevive;

	var zombieRevive = parseFloat(zombieBob.hitPoints);
	zombieBob.hitPointsCurrent = zombieRevive;

	$( '#death' ).hide();	
	$('.popover-bg').hide();

	setFightInfo();
});


 // AUDIO CONTROLS

 var x = $('#zombiemusic')[0]; 

 function playAudio() { 
    x.play(); 
 } 

 function pauseAudio() { 
    x.pause(); 
} 
