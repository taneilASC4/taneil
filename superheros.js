function superhero(realName, ability, gender, archEnemy){
    this.realName = realName,
    this.ability = ability,
    this.gender = gender,
    this.archEnemy = archEnemy

    this.newAbility = function(ability2)  {
        this.ability = ability2;
    }
}

var superman = {
'realName' : "Clark Kent"

}

var Batman =  new superhero ('Bruce Wayne', 'dat money', 'male', 'Joker');
var StaticShock = new superhero('Virgil' ,'electricty', 'male', 'Ebon');
console.log(Batman.realName);
console.log(StaticShock.realName);
console.log(Batman.ability);
Batman.newAbility("dropkick");
console.log(Batman.ability);


