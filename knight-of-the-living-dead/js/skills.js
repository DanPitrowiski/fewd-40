// ******************************************
// * SKILLS LIST
// ******************************************

var skillList = ["finishhim","lightonyourfeet","armorup","keeneye"];

	var finishhim = {
		name: "Finish Him",
		statAdj: 10,
		skillpointCost: 2,
		turns: 4,
		turnsCount: 0,
		uid: "finishhim",
		heroOwns: true,
		effectDescription: "+10 dmg 4 turns", 
		adjHero: function (){
			hero.weapon[1] += finishhim.statAdj;
			console.log("Working finish him");
			hero.weapon[2] += finishhim.statAdj;} ,
		negHero: function (){
			hero.weapon[1] -= finishhim.statAdj;
			hero.weapon[2] -= finishhim.statAdj;},
	};

	var lightonyourfeet = {
		name: "Light on your feet",
		statAdj: 20,
		skillpointCost: 1,
		turns: 5,
		turnsCount: 0,
		uid: "lightonyourfeet",
		heroOwns: true,
		effectDescription: "+20 dodge 5 turns", 
		adjHero: function (){
			hero.dodge += lightonyourfeet.statAdj; },
		negHero: function (){
			hero.dodge -= lightonyourfeet.statAdj; },
	};

	var armorup = {
		name: "Armor up",
		statAdj: 3,
		skillpointCost: 3,
		turns: 99,
		turnsCount: 0,
		uid: "armorup",
		heroOwns: true,
		effectDescription: "+3 armor all battle", 
		adjHero: function (){
			hero.armor += armorup.statAdj; },
		negHero: function (){
			hero.armor -= armorup.statAdj; },
	};

	var keeneye = {
		name: "Keen eye",
		statAdj: 10,
		skillpointCost: 2,
		turns: 99,
		turnsCount: 0,
		uid: "keeneye",
		heroOwns: false,
		effectDescription: "+10 accuracy all battle", 
		adjHero: function (){
			hero.accuracy += keeneye.statAdj; },
		negHero: function (){
			hero.accuracy -= keeneye.statAdj; },
	};


// ******************************************
// * CLICK SKILL
// ******************************************

$('.skill-button').click( function(){
	if (playerTurn == false){ return; }
	var heroskill = $(this).attr('id');

	$('.turns-alerts').remove();

	if (eval(heroskill).skillpointCost > hero.skillPointsCurrent){
		var message = ("You need more skillpoints for that.");
		alertMessage(message, null, false);
		return;
	}
	console.log("Skills page - player turn = "+ playerTurn);

	$('.alert-button').addClass('enemyturn');
	$('.fight-button').addClass('turnoffbuttons');
	$('.item-button').addClass('turnoffbuttons');
	$('.skill-button').addClass('turnoffbuttons');

	eval(heroskill).turnsCount = eval(heroskill).turns;
	hero.skillPointsCurrent -= eval(heroskill).skillpointCost;
	
	eval(heroskill).adjHero();
	
	var message = ( hero.name + " activated "+eval(heroskill).name+" ("+eval(heroskill).effectDescription+")");
	$('#'+eval(heroskill).uid).css('display','none');

	playSkillActivated();
	alertMessage(message, null, false);
	endTurn();
	setFightInfo();

	setTimeout(function(){
		enemyAttack();
	},1700);

});



// ******************************************
// * Skill Counter and Set
// ******************************************

function skillsSet(){

	var count = skillList.length;
	for (var i=0; i < count; i++){
		if (eval(skillList[i]).turnsCount >= 1){
			eval(skillList[i]).turnsCount--;
			if(eval(skillList[i]).turnsCount === 0){
				eval(skillList[i]).negHero();
				var message = (eval(skillList[i]).name+"'s effects just wore off.");
				alertMessage(message, null, false);
				$('#'+eval(skillList[i]).uid).css('display','inherit');
			}
		}
	}
}