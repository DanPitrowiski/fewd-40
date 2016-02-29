 var message;

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
			var name = $( '#hero-name' ).val();
		 	hero.name = name;
		 	$( "#entry" ).css('display','none');
		 	$( "#popover" ).fadeOut(2000);
		 	// $( "#popover" ).css('background-color','rgba(0,0,0,0)');
		 	$( "#hero-stats>.ch-name>.bold-stat").text(hero.name);
			})});


// ******************************************
// * ATTACK BUTTON CLICKED
// ******************************************

$('.attack-f').click( function(){
		hitting(hero, zombieBob);
		alertMessage("The Enemies Turn");
		hitting(zombieBob, hero);
});

// ******************************************
// * HITTING CALCULATION
// ******************************************

function hitting(attacker, defender){
	var hitChance = Math.floor((Math.random() * (attacker.accuracy+defender.accuracy)) + 1);
	console.log(hitChance);

	if ( hitChance <= attacker.accuracy) {
		// message = ( attacker.name + " hits " + defender.name );
		// console.log(message);
		// alertMessage(message);
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

	var variables = (attackerMaxDmg-attackerMinDmg)
	console.log(variables)
	var dmgReceived = dmgRandom * (attackerStrength/defenderToughness);

	dmgReceived = Math.floor(dmgReceived);

	// $( ".game-alerts" ).show().fadeOut(2000).text( attacker.name + " deals " + dmgReceived + " damage to " + defender.name);

	message = ( attacker.name + " hits " + defender.name + ". </br>" + attacker.name + " deals " + dmgReceived + " damage to " + defender.name );
	console.log(message);
	alertMessage(message);
	defender.hitPointsCurrent = defender.hitPointsCurrent -  dmgReceived;
	setFightInfo();

};

// ******************************************
// * ALL ALERT NOTIFICATION
// ******************************************

function alertMessage(message){
		$( '.game-alerts' ).promise().then(function(){
			$( ".game-alerts" ).show();
			$( ".game-alerts" ).fadeOut(4000).html(message);
	});
}

// ******************************************
// * RESETTING PAGE INFO
// ******************************************

function setFightInfo(){
	$( "#enemyone-name").text(zombieBob.name);

	if (zombieBob.hitPointsCurrent < 0 ){zombieBob.hitPointsCurrent = 0; }
	if (hero.hitPointsCurrent < 0 ){hero.hitPointsCurrent = 0; }

	$( "#enemyone-level").text(zombieBob.level);
	$( "#hero-level").text(hero.level);

	var enemyhealth = (zombieBob.hitPointsCurrent + "/" + zombieBob.hitPoints);
	var herohealth = (hero.hitPointsCurrent + "/" + hero.hitPoints);

		$( '.game-alerts' ).promise().done(function(){
			$( "#enemyone-health").text(enemyhealth);
			$( "#hero-health").text(herohealth);
		});
}

// ******************************************
// * HERO HOVER
// ******************************************

$( '#hero-ui' ).hover( 
	function() {
		$('.hero-stats').css('display','-webkit-box');
		var heroStats = ( "<span class='statnum'>" + hero.name + "</span></br>" +
			hero.type + "</br></br>" + 
			"<span class='statnum'>" + hero.accuracy + "</span> ACCURACY </br>" + 
			"<span class='statnum'>" + hero.strength + "</span> STRENGTH </br>" +
			"<span class='statnum'>" + hero.toughness + "</span> TOUGHNESS </br>" + 
			"<span class='statnum'>" + hero.speed + "</span> SPEED </br>" + 
			"<span class='statnum'>" + hero.luck + "</span> LUCK</br>" );
		$( '.hero-stats').html(heroStats); 

	}, function() {
    	$( '.hero-stats' ).css('display','none');
  }
  );
