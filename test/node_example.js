// this is a little example if you want to use gmynd in a node.js project.

let gmynd = require("gmynd");

const superheroes = [
    { Name: "Steppenwolf", Alignment: "bad", Gender: "Male", Height: 183, Weight: 91 },
    { Name: "Storm", Alignment: "good", Gender: "Female", Height: 180, Weight: 57 },
    { Name: "Sunspot", Alignment: "good", Gender: "Male", Height: 173, Weight: 77 },
    { Name: "Superboy", Alignment: "good", Gender: "Male", Height: 170, Weight: 68 },
    { Name: "Superboy-Prime", Alignment: "bad", Gender: "Male", Height: 180, Weight: 77 },
    { Name: "Supergirl", Alignment: "good", Gender: "Female", Height: 165, Weight: 54 },
    { Name: "Superman", Alignment: "good", Gender: "Male", Height: 191, Weight: 101 }
]

let supergirl = gmynd.findFirstByValue(superheroes, "Name", "Supergirl");

console.log(supergirl);