$('.item-button').click( function(){

	debugger;

	$('.alert-button').addClass('enemyturn');
	$('.fight-button').addClass('turnoffbuttons');
	$('.item-button').addClass('turnoffbuttons');
	$('.skill-button').addClass('turnoffbuttons');

	if (playerTurn == false){ return; }
	var item = $(this).attr('id');

	if (item === "healthpotion"){
		hero.hitPointsCurrent = hero.hitPoints;
		message = ( hero.name + "'s hitpoints were restored to full.");
	}

	if (item === "skillspotion"){
		hero.skillPointsCurrent = hero.skillPoints;
		message = ( hero.name + "'s skillpoints were restored to full.");
	}

	playItemRestore();
	$('.turns-alerts').remove();
	alertMessage(message, null, false);
	endTurn();
	setFightInfo();

	setTimeout(function(){
		enemyAttack();
	},1700);
});