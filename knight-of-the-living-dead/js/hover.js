
$( '#hero-ui,#hero-stats' ).hover( 
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

$( '#enemy-ui-one,#enemyone' ).hover( 
	function() {
		$('.enemy-stats').css('display','-webkit-box');
		var enemyStats = ( 
			"<span class='statnum'>" + currentEnemies[0].name + "</span></br>" +
			currentEnemies[0].type + "</br></br>" + 
			"<span class='statnum'>" + currentEnemies[0].accuracy + "</span> ACCURACY </br>" + 
			"<span class='statnum'>" + currentEnemies[0].strength + "</span> STRENGTH </br>" +
			"<span class='statnum'>" + currentEnemies[0].toughness + "</span> TOUGHNESS </br>" + 
			"<span class='statnum'>" + currentEnemies[0].speed + "</span> SPEED </br>" + 
			"<span class='statnum'>" + currentEnemies[0].luck + "</span> LUCK</br>" +
			"<span class='statnum'>" + currentEnemies[0].weapon[0] + "</span> dmg " + currentEnemies[0].weapon[1] + "-" + currentEnemies[0].weapon[2] + "</br>" );
		$( '.enemy-stats').html(enemyStats); 

	}, function() {
    	$( '.enemy-stats' ).css('display','none');
  }
  );