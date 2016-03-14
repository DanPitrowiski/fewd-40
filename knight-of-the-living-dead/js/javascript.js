 var message;
 var playerTurn = true;
 var enemyList = [zombieBob, mountainGiant, zombieBob, mountainGiant, zombieBob];
 var currentEnemies = [zombieBob];
 var myDiv = document.getElementById("div-history");


// ******************************************
// * START GAME
// ******************************************

 $( document ).ready(function() {
 	$( "#popover" ).html("<form id='entry'><h1>Knight of the Living Dead</h1><img src='images/hero.png'><h3>Choose the name of your hero</h3><input type='text' id='hero-name' placeholder='Choose a hero name...'><input type='submit' value='Update' id='submit-btn'></form>");
 	$( "#popover" ).addClass('popover-bg');
 	var text_input = $('#entry');
  	text_input.focus ();
  	setFightInfo();
  });

	$( document ).ready(function() {
		$('#entry').on('submit', function(e){
			e.preventDefault();
			e.stopImmediatePropagation();
			playAudio(); 
			var name = $( '#hero-name' ).val();
		 	hero.name = name;
		 	$( "#entry" ).css('display','none');
		 	$( "#popover" ).fadeOut(2000);
		 	// $( "#popover" ).css('background-color','rgba(0,0,0,0)');
		 	$( "#hero-stats>.ch-name>.bold-stat").text(hero.name);

		    alertMessage(currentEnemies[0].name + " won't let you pass. Time for a fight!", null, false);
			})});

// ******************************************
// * MENU
// ******************************************

$('.skill-f').click( function(){
skillsClose();
});


function skillsClose(){
	$('#skills-menu').toggle();
};

// ******************************************
// * ATTACK START
// ******************************************

// HERO'S TURN

$('.attack-f').click( function(){
	if (playerTurn == false){ return; }
	heroAttack();	
});

function heroAttack(){
	$('.alert-button').addClass('enemyturn');
	$('.turns-alerts').remove();
	$('.fight-button').addClass('turnoffbuttons');
	$('.skill-button').addClass('turnoffbuttons');


	var hit = hitting(hero, currentEnemies[0]);
	
	if (hit === true){
	var dmgReceived = damage(hero, currentEnemies[0]);
	message = ( hero.name + " hit " + currentEnemies[0].name +" dealing " + dmgReceived + " damage.");
 	} 
 	if (hit === false){
		message = ( hero.name + " missed " + currentEnemies[0].name );
 	}
 	if (hit === "dodge") {
 		message = ( currentEnemies[0].name + " dodged " + hero.name );
 	}

 	attackAnimation(hero, currentEnemies[0], hit);
 	
    setTimeout(function(){
 	alertMessage(message, "Enemy Turn", true); 
 	if ( hit === true){ playEnemyHit(); } else { playWeaponMiss(); }
	skillsSet();
	endTurn();
	setFightInfo();
	},100);

};

// ENEMIES TURN

$('.enemyturn').click( function(){
	enemyAttack();
});


function enemyAttack(){
	debugger;
	$('.alert-button').removeClass('enemyturn'); 
	$('.turns-alerts').remove();
	$('.fight-button').removeClass('turnoffbuttons');
	$('.skill-button').removeClass('turnoffbuttons');
	$( ".alert-button" ).css('display','none');

	var hit = hitting(currentEnemies[0],hero);

	console.log(hit);

	if (hit === true){
	var dmgReceived = damage(currentEnemies[0],hero);
	message = ( currentEnemies[0].name + " hit " + hero.name +" dealing " + dmgReceived + " damage.");
 	playHeroHit(); 
 	} if (hit === false){
 		message = ( currentEnemies[0].name + " missed " + hero.name );
 	} if (hit === "dodge") {
 		message = ( hero.name + " dodged " + currentEnemies[0].name );
 	}

 	attackAnimation(currentEnemies[0],hero, hit);
	
	setTimeout(function(){
	alertMessage(message, null, false);
 	if ( hit === true){ playHeroHit(); } else { playWeaponMiss(); }
	endTurn();
	setFightInfo();
	},100);
};

// ******************************************
// * HITTING CALCULATION
// ******************************************

function hitting(attacker, defender){

	var hitChanceRandom = Math.floor((Math.random() * 100) + 1);
	console.log(hitChanceRandom);
	var hitChance = attacker.accuracy;

	if ( hitChanceRandom <= hitChance) {
		var dodgeChance = Math.floor((Math.random() * 100) + 1);
		if ( dodgeChance <= defender.dodge){
			return "dodge";
		}
		return true;
		// damage(attacker, defender);
	}
	else {
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

	var dmgRandom = Math.floor((Math.random() * (attackerMaxDmg-attackerMinDmg) ) + attackerMinDmg);

	dmgReceived = Math.floor(dmgRandom - defender.armor);

	defender.hitPointsCurrent = defender.hitPointsCurrent -  dmgReceived;

	return dmgReceived;

};

// ******************************************
// * ATTACK ANIMATION
// ******************************************

function attackAnimation(attacker, defender, hit){

// var currentCenterPoint = $(attacker.ui_id).outerWidth() / 2;
// var nextCenterPoint = $(defender.ui_id).next().outerWidth() / 2;

console.log("Attacker: "+attacker.name+"   Defender:"+defender.name+" and hit "+hit)


	if (attacker.ui_id === "#hero-ui" ){  
		  $(attacker["ui_id"]).addClass("hero-attacking movetofront");
		  if ( hit === "dodge" ){
			$(defender["ui_id"]).addClass("enemy-dodge");
		}
		  setTimeout(function(){
		  $(attacker["ui_id"]).removeClass("hero-attacking movetofront");
		  $(defender["ui_id"]).removeClass("enemy-dodge");
		  }, 2000);
	} 
	else {
		$(attacker["ui_id"]).addClass("enemy-attacking movetofront");
	  	if ( hit === "dodge"  ){
			$(defender["ui_id"]).addClass("hero-dodge");
		}
	  	setTimeout(function(){
	    $(attacker["ui_id"]).removeClass("enemy-attacking movetofront");
	    $(defender["ui_id"]).removeClass("hero-dodge");
	  	}, 2000);
	}
}

// ******************************************
// * END TURN
// ******************************************

function endTurn(){
	console.log("endTurn what is playerTurn="+playerTurn)
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

			$( ".game-alerts" ).append("<h2 class='turns-alerts'>" + message + "</h2>");
			$( ".game-alerts" ).fadeIn(500).css('display','block');

			console.log("before alert button should show = " + playerTurn);

			$('.history').prepend('<p class="message">'+message+'</p>');
			historyScroll();

			console.log(showAlertButton);
			if (showAlertButton === true){
				$( ".alert-button" ).text(buttonText);
				$( ".alert-button" ).fadeIn(500).css('display','block');
			}
}

function historyScroll() {
	$('#div-history').scrollTop("0");
}

// ******************************************
// * RESETTING FIGHT INFO
// ******************************************

function setFightInfo(){
	$( "#enemyone-name").text(currentEnemies[0].name);
	$( "#enemyone-level").text(currentEnemies[0].level);
	$( "#hero-level").text(hero.level);

	var enemyhealth = (currentEnemies[0].hitPointsCurrent + "/" + currentEnemies[0].hitPoints);
	var herohealth = (hero.hitPointsCurrent + "/" + hero.hitPoints);
	var heroskillpoints = (hero.skillPointsCurrent + "/" + hero.skillPoints);

	$( '.game-alerts' ).promise().done(function(){
		$( "#enemyone-health").text(enemyhealth);
		$( "#hero-health").text(herohealth);
		$( '#hero-skillpoints').text(heroskillpoints);

	});

	if (currentEnemies[0].hitPointsCurrent <= 0 ){
		currentEnemies[0].hitPointsCurrent = 0; 
		enemyKilled(currentEnemies[0].name);
	}
	if (hero.hitPointsCurrent <= 0 ){
		hero.hitPointsCurrent = 0; 
		death();
	}
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
	$('#enemy-ui-one').fadeOut(2000);
	$('#enemyone').fadeOut(3000);
	$('#skills-menu').hide();
	$('#fight-menu').hide();
	$('.alert-button').css('display','none');
	alertMessage("You've killed " + currentEnemies[0].name, null , false);
	$('#nextEnemy').html('<button class="nextEnemy">Ready For Next Enemy?</button>');
	$( "#nextEnemy" ).show();
	$(".nextEnemy").css('display','inherit');
}

// ******************************************
// * LOAD NEXT ENEMY
// ******************************************

$('.nextEnemy,#nextEnemy').click( function(){
	// CSS changes and fades

	$( "#nextEnemy").css('display','none');
	$('.fight-button').removeClass('turnoffbuttons');
	$('.skill-button').removeClass('turnoffbuttons');
	$("#enemy-ui-one").css('display','inherit');
	$("#fight-menu").show();
	$('.turns-alerts').remove();
	$("#enemy-ui-one,#enemyone,.enemies").fadeIn(2000).show();

	console.log("What ID are we hiding "+currentEnemies[0].img_id);
	
	// Select Next Enemy

	enemyList.splice( enemyList[0], 1 );
	oldEnemies = currentEnemies[0].img_id;
	currentEnemies[0] = enemyList[0];
	$(oldEnemies).remove();
	currentEnemies[0].img();
 	$(currentEnemies[0].img_id).css('display','inherit');
	
	alertMessage("Prepare to fight " + currentEnemies[0].name, null , false);
	
	currentEnemies[0].hitPointsCurrent = currentEnemies[0].hitPoints;

	playEnemyEntrance(currentEnemies[0]);
	playerTurn=true;
	setFightInfo();
});

// ******************************************
// * RELOAD AFTER YOUR DEATH
// ******************************************

$('.reload').click(function reload() {

	currentEnemies[0].hitPointsCurrent = currentEnemies[0].hitPoints;
	hero.hitPointsCurrent = hero.hitPoints;

	$( ".game-alerts" ).css('display','none');
	$('.popover-bg').hide();
	$('#death').hide();
	$('.turns-alerts').remove();
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
var gameMusic = $('#zombiemusic')[0]; 
var skillActivated = $('#skillactivated')[0];

function playEnemyHit() { enemyHit.play(); } 

function playHeroHit() { heroHit.play(); } 

function playWeaponMiss() { weaponMiss.play(); } 

function playAudio() { gameMusic.play(); } 

function pauseAudio() { gameMusic.pause(); } 

function playSkillActivated() { skillActivated.play(); }

function playEnemyEntrance(enemy){
	if (enemy.img_id === "#mountainGiant"){
	var audio = $('#mountainGiant-entrance')[0];
	}
	if (enemy.img_id === "#zombieBob"){
	var audio = $('#zombieBob-entrance')[0];
	}
	audio.play();
}
