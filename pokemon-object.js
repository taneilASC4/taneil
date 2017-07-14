var infernape = {
    'HP' : 76,
    "attack" : 104,
    "defense" : 71,
    "legendary" : false,
    "type" : "fire and fighting"



};
function pokemon (infernape, HP , attack, defense, legendary, name, type){
    this.HP = HP,
    this.attack = attack,
    this.defense = defense,
    this.legendary = legendary,
    this.name = name,
    this.type = type,
    this.infernape = infernape
};

var infernape = new pokemon( 76, 106, 71, false, 'fire and fighting' );
var luxray = new pokemon(80, 120, 79, false, 'electric' );
var haunter = new pokemon(45, 50, 45, false, 'ghost and poison');
var lucario = new pokemon(70, 110, 70, false, 'fighting and steel');

var roster = [
    infernape,
    luxray,
    haunter,
    lucario
]


var mypokedex =  (infernape, luxray, haunter, lucario);
console.log(mypokedex.HP);
console.log(mypokedex.attack);
console.log(mypokedex.defense);
console.log(mypokedex.legendary);
console.log(mypokedex.name);
console.log(mypokedex.type);
console.log(mypokedex.infernape);
