var turnzero = 0;
var levelUpOptions = ['attackLevel', 'armorLevel','skillsLevel','dodgeLevel','accuracyLevel'];

	var attackLevel = {
	level1: ['Bone Saw', 9, 14],
	level2: ['Death Seeker', 14, 16],
	level3: ['Bone Scythe', 10, 30],
	level4: ['Harbinger', 20, 30],
	level5: ['Repentance', 26, 36],
	level6: ['Death Blow', 35, 40],
	level7: ["Death's Touch", 40, 40],
	level8: ['Exacto Knife', 40, 50],
	nextLevel: ["level1", 1],
	currentLevel: 1,
	maxLevel: 4,
	img: "images/icons/attack.png",
	upgradeSelect: function(){
		$('#level-up').append('<div id="attackLevel" class="levelup-option border-attacklevel">'+'<div class="img-bg"> <img class="center skill-img" src='+attackLevel.img+'></div>'+'<h1>UPGRADE YOUR WEAPON</h1></br>'+
		'<p>Upgrade your weapon from ' + hero.weapon[0] + ' ('+ hero.weapon[1] + '-' + hero.weapon[2] + ') dmg to the '+
							  attackLevel[upgradeTo][0] + ' ('+ attackLevel[upgradeTo][1] + '-' + attackLevel[upgradeTo][2] + ' dmg).</p><button class="levelup-button center" id="attackLevel">CHOOSE UPGRADE</button></div>');
		},
	}

	var armorLevel = {
	level1: 3,
	level2: 5,
	level3: 7,
	level4: 9,
	level5: 11,
	level6: 13,
	level7: 15,
	level8: 17,
	nextLevel: ["level1", 1],
	maxLevel: 5,
	img: "images/icons/armor.png",
	}

	var accuracyLevel = {
	level1: 70,
	level2: 75,
	level3: 81,
	level4: 87,
	level5: 93,
	level6: 99,
	level7: 100,
	level8: 105,
	nextLevel: ["level1", 1],
	maxLevel: 5,
	img: "images/icons/accuracy.png",
	}

	var skillsLevel = {
	level1: 'armorup',
	level2: 'finishhim',
	level3: 'extralife',
	level4: 'morepotions',
	level5: 'lightonyourfeet',
	level6: 'execute',
	nextLevel: ["level1", 1],
	maxLevel: 2,
	img: "images/icons/skills.png",
	}

	var dodgeLevel = {
	level1: 35,
	level2: 42,
	level3: 49,
	level4: 57,
	level5: 65,
	level6: 73,
	level7: 81,
	level8: 90,
	nextLevel: ["level1", 1],
	maxLevel: 5,
	img: "images/icons/dodge.png",
	}

function levelUp() {
	hero.level += 1;
	$( "#popover" ).addClass("popover-bg-opaque");
	$( "#level-up" ).fadeIn(2000);
	$( "#popover" ).fadeIn(2000);
	$( ".insert-lvl").html(hero.level);

	// Give Random Hitpoint Bonus
	var addHitPoints = Math.floor((Math.random() * 5) + 1);
    hero.hitPointsCurrent += addHitPoints;
    hero.hitPoints += addHitPoints;
    $('.editHitPoints').html(addHitPoints);

    // Give Random Skillpoint Bonus
    var addSkillPoints = Math.floor((Math.random() * 3) + 1);
    hero.skillPointsCurrent += addSkillPoints;
    hero.skillPoints += addSkillPoints;
    $('.editSkillPoints').html(addSkillPoints);

    setCharacterStats();

    // Randomize Next Upgrade
	levelUpOptions = shuffle(levelUpOptions);

	var level;
	console.log(levelUpOptions);

	if (( levelUpOptions[0] === "attackLevel") || ( levelUpOptions[1] === "attackLevel") || ( levelUpOptions[2] === "attackLevel")) {
		// level = attackLevel.currentLevel += 1;
		upgradeTo = attackLevel.nextLevel[0];
		console.log(level);
		$('#level-up').append('<div class="levelup-option border-attacklevel">'+'<div class="img-bg"><img class="center skill-img" src='+attackLevel.img+'></div><h1>UPGRADE YOUR WEAPON</h1></br>'+
						  	'<p>Upgrade your weapon from ' + hero.weapon[0] + ' ('+ hero.weaponSaved[1] + '-' + hero.weaponSaved[2] + ' dmg) to the '+
						  	attackLevel[upgradeTo][0] + ' ('+ attackLevel[upgradeTo][1] + '-' + attackLevel[upgradeTo][2] + ' dmg).</p><button class="levelup-button center" id="attackLevel">CHOOSE UPGRADE</button></div>'
						  	);
	}

	if (( levelUpOptions[0] === "armorLevel") || ( levelUpOptions[1] === "armorLevel") || ( levelUpOptions[2] === "armorLevel")) {
		// level = attackLevel.currentLevel += 1;
		upgradeTo = armorLevel.nextLevel[0];
		console.log(level);
		$('#level-up').append('<div class="levelup-option border-armorlevel">'+'<div class="img-bg"><img class="center skill-img" src='+armorLevel.img+'></div><h1>INCREASE YOUR ARMOR</h1></br>'+
							  '<p>Increase your armor plating from ' + hero.armorSaved + ' to '+ armorLevel[upgradeTo] + '.</p><button class="levelup-button center" id="armorLevel">CHOOSE UPGRADE</button></div>');
	}

	if (( levelUpOptions[0] === "accuracyLevel") || ( levelUpOptions[1] === "accuracyLevel") || ( levelUpOptions[2] === "accuracyLevel")) {
		// level = attackLevel.currentLevel += 1;
		upgradeTo = accuracyLevel.nextLevel[0];
		console.log(level);
		$('#level-up').append('<div class="levelup-option border-accuracylevel">'+'<div class="img-bg"><img class="center skill-img" src='+accuracyLevel.img+'></div><h1>UP YOUR ACCURACY</h1></br>'+
							  '<p>Increase your accuracy from ' + hero.accuracySaved + '% to '+ accuracyLevel[upgradeTo] + '%.</p><button class="levelup-button center" id="accuracyLevel">CHOOSE UPGRADE</button></div>');
	}

	if (( levelUpOptions[0] === "skillsLevel") || ( levelUpOptions[1] === "skillsLevel") || ( levelUpOptions[2] === "skillsLevel")) {
		// level = attackLevel.currentLevel += 1;
		upgradeTo = skillsLevel.nextLevel[0];
		console.log(level);
		$('#level-up').append('<div class="levelup-option border-skillslevel">'+'<div class="img-bg"><img class="center skill-img" src='+skillsLevel.img+'></div><h1>CHOOSE A NEW SKILL</h1></br>'+
							  '<p>Add the skill '+eval(skillsLevel[upgradeTo]).name + ' - '+eval(skillsLevel[upgradeTo]).effectDescription+'.</p><button class="levelup-button center" id="skillsLevel">CHOOSE UPGRADE</button></div>');
	}

	if (( levelUpOptions[0] === "dodgeLevel") || ( levelUpOptions[1] === "dodgeLevel") || ( levelUpOptions[2] === "dodgeLevel")) {
		// level = attackLevel.currentLevel += 1;
		upgradeTo = dodgeLevel.nextLevel[0];
		console.log(level);
		$('#level-up').append('<div class="levelup-option border-dodgelevel">'+'<div class="img-bg"><img class="center skill-img" src='+dodgeLevel.img+'></div><h1>DODGE AND MOVE!</h1></br>'+
							  '<p>Upgrade your dodge level from '+ hero.dodgeSaved + '% to '+dodgeLevel[upgradeTo]+ '%.</p><button class="levelup-button center" id="dodgeLevel">CHOOSE UPGRADE</button></div>');
	}


	$('.levelup-button').click( function(){

	var upgrade = $(this).attr('id');
	var upgradeTo;
	var addDifference;

	if (upgrade === "attackLevel"){
		var addDifference1 = hero.weapon[1] - hero.weaponSaved[1];
		var addDifference2 = hero.weapon[2] - hero.weaponSaved[2];

		upgradeTo = attackLevel.nextLevel[0];

		hero.weapon[0] = attackLevel[upgradeTo][0];
		hero.weapon[1] = attackLevel[upgradeTo][1] + addDifference1;
		hero.weapon[2] = attackLevel[upgradeTo][2] + addDifference2;
		hero.weaponSaved[1] = attackLevel[upgradeTo][1];
		hero.weaponSaved[2] = attackLevel[upgradeTo][2];
		attackLevel.nextLevel[1] += 1;
		attackLevel.nextLevel[0] = "level" + attackLevel.nextLevel[1];
	}

	if (upgrade === "armorLevel"){
		addDifference = hero.armor - hero.armorSaved;
		upgradeTo = armorLevel.nextLevel[0];
		hero.armor = armorLevel[upgradeTo] + addDifference;
		hero.armorSaved = armorLevel[upgradeTo];
		armorLevel.nextLevel[1] += 1;
		armorLevel.nextLevel[0] = "level" + armorLevel.nextLevel[1];
	}

	if (upgrade === "accuracyLevel"){
		addDifference = hero.accuracy - hero.accuracySaved;
		upgradeTo = accuracyLevel.nextLevel[0];
		hero.accuracy = accuracyLevel[upgradeTo];
		hero.accuracySaved = accuracyLevel[upgradeTo];
		accuracyLevel.nextLevel[1] += 1;
		accuracyLevel.nextLevel[0] = "level" + accuracyLevel.nextLevel[1];
	}

	if (upgrade === "dodgeLevel"){
		upgradeTo = dodgeLevel.nextLevel[0];
		hero.dodge = dodgeLevel[upgradeTo];
		hero.dodgeSaved = dodgeLevel[upgradeTo];
		dodgeLevel.nextLevel[1] += 1;
		dodgeLevel.nextLevel[0] = "level" + dodgeLevel.nextLevel[1];
	}

	if (upgrade === "skillsLevel"){
		upgradeTo = skillsLevel.nextLevel[0];
		$('#'+skillsLevel[upgradeTo]).css('display','inherit');
		skillsLevel.nextLevel[1] += 1;
		skillsLevel.nextLevel[0] = "level" + skillsLevel.nextLevel[1];
	}

	console.log("Level up - player turn = "+ playerTurn);

	eval(upgrade);
	$( "#popover" ).fadeOut(200);
	playSkillActivated();
	// setFightInfo();
	$( ".levelup-option" ).remove();
	$( "#level-up" ).fadeOut(2000);
	setCharacterStats();
	// if ( turnzero != 0 ) {
	// 	enemyKilled(currentEnemies[0].name);
	// }
	// turnzero += 1;

});

}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}