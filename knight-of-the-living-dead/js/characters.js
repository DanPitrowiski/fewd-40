var hero = {
    name:"Farva",
    uid: "hero",
    level:5,
    type:"Undead Knight",
    accuracy: 70,
    dodge: 28,
    armor: 2,
    weapon: ['Bone Scabre', 7, 12],
    skillPointsCurrent:5,
    skillPoints:5,
    hitPointsCurrent:20,
    hitPoints:20,
    skills:['Finish Him!','Light on your feet','Armor Up'],
    ui_id: "#hero-ui",
    items: ['Health Potion','Rejuvenation Potion'],
};

var zombieBob = {
    name:"Farmer Bob Brains",
    uid: "zombieBob",
    level:8,
    type:"Zombie Botanist",
    accuracy: 60,
    dodge: 15,
    armor: 0,
    weapon: ['Pitch Fork', 5, 10],
    skillPointsCurrent:10,
    skillPoints:10,
    hitPointsCurrent:18,
    hitPoints:18,
    skills:['Bite','Skewer!'],
    ui_id: "#enemy-ui-one",
    img_id: "#zombieBob",
    img: function(){$("#enemy-ui-one").append('<img id="'+currentEnemies[0].uid+'" class="ememies" src="images/zombie-farmer.png">');},
};

var mountainGiant = {
    name:"Mountain Giant",
    uid: "mountainGiant",
    level:10,
    type:"Rocking and Rolling",
    accuracy: 55,
    dodge: 5,
    armor: 5,
    weapon: ['Fists', 12, 15],
    skillPointsCurrent:4,
    skillPoints:4,
    hitPointsCurrent:30,
    hitPoints:30,
    skills:['Crush','Pound'],
    ui_id: "#enemy-ui-one",
    img_id: "#mountainGiant",
    img: function(){$("#enemy-ui-one").append('<img id="'+currentEnemies[0].uid+'" class="ememies" src="images/rock-monster.png">');},
};

var ogre = {
    name:"Ogre Chief",
    uid: "ogre",
    level:7,
    type:"Crush, kill, than eat",
    accuracy: 65,
    dodge: 22,
    armor: 2,
    weapon: ['Club', 8, 10],
    skillPointsCurrent:4,
    skillPoints:4,
    hitPointsCurrent:25,
    hitPoints:25,
    skills:['Crush','Pound'],
    ui_id: "#enemy-ui-one",
    img_id: "#ogre",
    img: function(){$("#enemy-ui-one").append('<img id="'+currentEnemies[0].uid+'" class="ememies" src="images/ogre.png">');},
};

