// Only change code below this line
var school = {
    name: "Arena",
    location: "Sarajevo",
    established: "2020"
};
//End of school object

function myFunction(name){
// Only change code below this line
    school.name = name;
    return school;
//Only change code above this line
}

console.log(myFunction("Paragon")); 
module.exports = {school, myFunction};