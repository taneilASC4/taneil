function pet(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
}

var myPets = [new pet("Charlotte", 5, "brown"), new pet("Zoe", 10, "black"), new pet("Max", 2, "white")];

console.log(myPets[0].name);
console.log(myPets[1].name);
console.log(myPets[2].name);
// or you can do this
// function is not nesscarry
function petName() {
for (var i=0; i<3; i++){
    console.log(myPets[i].name);
}
}
petNane(myPets);