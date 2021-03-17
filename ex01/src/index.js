// Only change code below this line
var myPet = {
    species: "Cat",
    name: "Sylvester",
    legs: 4,
    friends: ['Tweety', 'Porky Pig' ]
};

function myFunction(myObj){
    return myObj;
}
//Only change code above this line

console.log(myFunction(myPet)); 

module.exports = {myPet, myFunction};