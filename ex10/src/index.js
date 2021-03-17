function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            relese_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP",
            },
            gold: true,
        },
        002: {
            artist: "Rage Against the Machine",
            title: "Rage Against the Machine",
            relese_year: 1991,
            id: 2,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP",
            },
        },
    };
    return myMusic;
}
console.log(myFunction());
module.exports = myFunction;