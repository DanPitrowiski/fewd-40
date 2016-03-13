// ******************************************
// * SKILLS LIST
// ******************************************

var skillList = ["finishhim","lightonyourfeet","armorup","keeneye"];

	var finishhim = {
		name: "Finish Him",
		statAdj: 10,
		skillpointCost: 2,
		turns: 3,
		turnsCount: 0,
		uid: "finishhim",
		heroOwns: true,
		effectDescription: "+10 dmg 3 turns", 
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
		skillpointCost: 1,
		turns: 99,
		turnsCount: 0,
		uid: "armorup",
		heroOwns: true,
		effectDescription: "+4 armor all battle", 
		adjHero: function (){
			hero.armor += armorup.statAdj; },
		negHero: function (){
			hero.armor -= armorup.statAdj; },
	};

	var keeneye = {
		name: "Keen eye",
		statAdj: 10,
		skillpointCost: 1,
		turns: 99,
		turnsCount: 0,
		uid: "keeneye",
		heroOwns: false,
		effectDescription: "+10 accuracy all battle", 
		adjHero: function (){
			hero.accuracy += keeneye.statAdj; },
		negHero: function (){
			hero.accuracy -= keeneye.statAdj; },
		// insertSkill: function (){
		// 	$('#skills-menu').append('<div id="keeneye" class="skill-button"> Keen Eye with Accuracy - 1SP<br><span class="skills-desc">+10 accuracy all battle</span></div>');
		// }
	};


// ******************************************
// * CLICK SKILL
// ******************************************

$('.skill-button').click( function(){
	console.log("Skills page - player turn = "+ playerTurn)
	if (playerTurn == false){ return; }

	var heroskill = $(this).attr('id');

	console.log(heroskill);
	// skillsClose();
	playSkillActivated();

	eval(heroskill).turnsCount = eval(heroskill).turns;
	hero.skillPointsCurrent -= eval(heroskill).skillpointCost;
	eval(heroskill).adjHero();
	
	var message = ( hero.name + " activated "+eval(heroskill).name+" ("+eval(heroskill).effectDescription+")");
	$('#'+eval(heroskill).uid).css('display','none');

	alertMessage(message, null, false);
	endTurn();
	setFightInfo();
	enemyAttack();

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