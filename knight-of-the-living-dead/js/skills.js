var heroSave = {
    attackAdj: [0,0],
    dodgeAdj: [0,0],
    damageAdj: [0,0,0],
    armorAdj: [0,0],
    spAdj: [0,0],
    hpAdj: [0,0],
}



// ******************************************
// * Finish Him
// ******************************************

$('.finish-him').click( function(){
skillsClose();

heroSave.damageAdj[0] = hero.weapon[1];
heroSave.damageAdj[1] = hero.weapon[2];
heroSave.damageAdj[2] = 3;
hero.weapon[1] = hero.weapon[1] * 2;
hero.weapon[2] = hero.weapon[2] * 2;
setFightInfo();
console.log("Finish him is working!");

heroAttack();

});

// ******************************************
// * Skill Set
// ******************************************

function skillsSet(){

if (heroSave.damageAdj[2] >= 1){
	heroSave.damageAdj[2]--;
	if(heroSave.damageAdj[2] === 0){
		 hero.weapon[1] = heroSave.damageAdj[0];
		 hero.weapon[2] = heroSave.damageAdj[1];
	}

}


}