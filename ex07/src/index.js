function myFunction(toBeDeleted) {
// Only change coode below this line
    lion = {
        name: "Simba",
        legs: 4,
        tails: 1,
        roar: "roar-roar"
    };

    delete lion[toBeDeleted];
    return lion;
//Only change code above this line
}
console.log(myFunction("roar")); 

module.exports = myFunction;