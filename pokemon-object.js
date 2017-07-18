var infernape = {
    'HP' : 76,
    "attack" : 104,
    "defense" : 71,
    "legendary" : false,
    "type" : "fire and fighting"



};
function pokemon ( HP , attack, defense, legendary, type){
    this.HP = HP,
    this.attack = attack,
    this.defense = defense,
    this.legendary = legendary,
    this.type = type
   
}

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




function printroster(){
    var mypokedex =  [infernape, luxray, haunter, lucario];

    for(var i=0; i<3; i++){
    console.log(mypokedex[i]['HP']);
    console.log(mypokedex[i]['attack']);
    console.log(mypokedex[i]['defense']);
    console.log(mypokedex[i]['legendary']);
    console.log(mypokedex[i]['type']);
}
}


function pokemonattacked(){
    for (var i=0; i<3; i++){
       console.log(mypokedex[i].HP - 10);
    }
}
pokemonattacked();
