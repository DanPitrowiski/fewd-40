$('.item-button').click( function(){

	debugger;

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
	alertMessage(message, null, false);
	endTurn();
	setFightInfo();
	enemyAttack();
});