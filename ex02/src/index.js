// Only change coode below this line
var myClothes = {
    hat: "Fedora",
    shirt: "Nike",
    shoes: "Converse"
};

function myFunction(myObj){
    var hatValue = myClothes.hat;
    var shirtValue = myClothes.shirt;
    var shoeValue = myClothes.shoes;
    return {hatValue, shirtValue, shoeValue}
}

//Only change code above this line

console.log(myFunction(myClothes)); 

module.exports = myFunction(myClothes);