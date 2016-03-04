 var message;
 var playerTurn = true;
 var currentEnemies = [zombieBob];

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

		    alertMessage(currentEnemies[0].name + " won't let you pass. Time for a fight!", null, false);
		    playerTurn = true;
			})});


// ******************************************
// * ATTACK START
// ******************************************

// HERO'S TURN

$('.attack-f').click( function(){
	// DON'T LET PLAYER SELECT BUTTONS WHEN NOT IN THEIR TURN
	// if (playerTurn === false){ return; } //

	$('.alert-button').addClass('enemyturn');
	$('.fight-button').addClass('turnoffbuttons');

	var hit = hitting(hero, currentEnemies[0]);
	
	if (hit === true){
	var dmgReceived = damage(hero, currentEnemies[0]);
	message = ( hero.name + " hit " + currentEnemies[0].name +" dealing " + dmgReceived + " damage.");
 	playEnemyHit();
 	} else {
		message = ( hero.name + " missed " + currentEnemies[0].name );
 	}

 	alertMessage(message, "Enemy Turn", true); 
	setFightInfo();
	endTurn();

});

// ENEMIES TURN

$('.enemyturn').click( function(){
	$('.alert-button').removeClass('enemyturn'); 
	$('.fight-button').removeClass('turnoffbuttons');
	$( ".alert-button" ).css('display','none');

	var hit = hitting(currentEnemies[0],hero);

	if (hit === true){
	var dmgReceived = damage(currentEnemies[0],hero);
	message = ( currentEnemies[0].name + " hit " + hero.name +" dealing " + dmgReceived + " damage.");
 	playHeroHit(); 
 	} else {
 		message = ( currentEnemies[0].name + " missed " + hero.name );
 	}

	alertMessage(message, null, false);
	setFightInfo();
	endTurn();
});

// ******************************************
// * HITTING CALCULATION
// ******************************************

function hitting(attacker, defender){

	var hitChance = Math.floor((Math.random() * (attacker.accuracy+defender.accuracy)) + 1);
	console.log(hitChance);

	if ( hitChance <= attacker.accuracy) {
		return true;
		// damage(attacker, defender);
	}
	else {
		playWeaponMiss();
		return false;
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

	dmgReceived = dmgRandom * (attackerStrength/defenderToughness);
	dmgReceived = Math.floor(dmgReceived);

	defender.hitPointsCurrent = defender.hitPointsCurrent -  dmgReceived;

	return dmgReceived;

};

// ******************************************
// * END TURN
// ******************************************

function endTurn(){
	if (playerTurn === false) { playerTurn = true; } 
	else if (playerTurn === true) { playerTurn = false;}
}

// ******************************************
// * ALL ALERT NOTIFICATIONS
// ******************************************

function alertMessage(message, buttonText, showAlertButton){
		// $( '.game-alerts' ).promise().then(function(){
			$( ".game-alerts" ).css('display','none');

			console.log('.game-alerts');

			$( ".game-alerts" ).html("<h2>" + message + "</h2>");
			$( ".game-alerts" ).fadeIn(500).css('display','block');

			console.log("before alert button should show = " + playerTurn)

			console.log(showAlertButton);
			if (showAlertButton === true){
				$( ".alert-button" ).text(buttonText);
				$( ".alert-button" ).fadeIn(500).css('display','block');
			}
}

// ******************************************
// * RESETTING PAGE INFO
// ******************************************

function setFightInfo(){
	$( "#enemyone-name").text(currentEnemies[0].name);
	$( "#enemyone-level").text(currentEnemies[0].level);
	$( "#hero-level").text(hero.level);

	if (currentEnemies[0].hitPointsCurrent <= 0 ){
		currentEnemies[0].hitPointsCurrent = 0; 
		enemyKilled(currentEnemies[0].name);
	}
	if (hero.hitPointsCurrent <= 0 ){
		hero.hitPointsCurrent = 0; 
		death();
	}

	var enemyhealth = (currentEnemies[0].hitPointsCurrent + "/" + currentEnemies[0].hitPoints);
	var herohealth = (hero.hitPointsCurrent + "/" + hero.hitPoints);

	$( '.game-alerts' ).promise().done(function(){
		$( "#enemyone-health").text(enemyhealth);
		$( "#hero-health").text(herohealth);
	});
}

// ******************************************
// * DEATH
// ******************************************

function death(){
	$('.reload').fadeIn(3000).css('display','block');
	$('.popover-bg').fadeIn(4000).show();
	$( "#death" ).fadeIn(3000).show();
	};

function enemyKilled(defender){
	$('#enemy-ui-one').fadeOut(3000);
	$('#enemyone').fadeOut(3000);
	$('#fight-menu').hide();
	$('.alert-button').css('display','none');
	playerTurn = false;
	alertMessage("You've killed " + currentEnemies[0].name, null , false);
	$('#nextEnemy').html('<button class="nextEnemy">Ready For Next Enemy?</button>');
	$( "#nextEnemy" ).show();
	$(".nextEnemy").css('display','inherit');
}

$('.nextEnemy,#nextEnemy').click( function(){
	$( ".nextEnemy,#zombieBob" ).css('display','none');
	currentEnemies[0] = rockMonster;
	$("#rockMonster").css('display','inherit');
	$("#enemy-ui-one,#enemyone,#fight-menu").show();
	$("#enemy-ui-one").css('display','inherit');
	alertMessage("Prepare to fight " + currentEnemies[0].name, null , false);
	$('.fight-button').removeClass('turnoffbuttons');
	
	var zombieRevive = parseFloat(currentEnemies[0].hitPoints);
	currentEnemies[0].hitPointsCurrent = zombieRevive;

	setFightInfo();
	playerTurn = true;
});

// ******************************************
// * RELOAD AFTER YOUR DEATH
// ******************************************

$('.reload').click(function reload() {

	var heroRevive = parseFloat(hero.hitPoints);
	hero.hitPointsCurrent = heroRevive;

	var zombieRevive = parseFloat(currentEnemies[0].hitPoints);
	currentEnemies[0].hitPointsCurrent = zombieRevive;

	$( ".game-alerts" ).css('display','none');
	$( '#death' ).hide();	
	$('.popover-bg').hide();
	alertMessage("This time you won't be so lucky " + currentEnemies[0].name, null , false);

	setFightInfo();
	playerTurn=true;
});

// ******************************************
// * AUDIO CONTROLS
// ******************************************

 var enemyHit = $('#enemyhit')[0]; 
 var heroHit = $('#herohit')[0]; 
 var weaponMiss = $('#weaponmiss')[0];
 var x = $('#zombiemusic')[0]; 

 function playEnemyHit() { 
    enemyHit.play(); 
 } 

 function playHeroHit() { 
    heroHit.play(); 
 } 

  function playWeaponMiss() { 
    weaponMiss.play(); 
 } 

 function playAudio() { 
    x.play(); 
 } 

 function pauseAudio() { 
    x.pause(); 
} 
