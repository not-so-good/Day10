//Create lion object here  
var lion = {
    name: "Simba",
    legs: 4,
    tails: 1
};
//End lion object here

function myFunction(newProp, newPropValue){
//Only change code below this line
    lion[newProp] = newPropValue;
    return lion;
//Only change code above this line
}

console.log(myFunction("roar", "roar-roar"));

module.exports = myFunction;