// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    if (testInput === ""){
        return "Empty";
    }
    if (isNaN(testInput)){
        return "Not a Number";
    }
    if(typeof Number(testInput) === "number") {
        return "Is a Number";
    }

 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) === "Empty" || validateInput(copilot)=== "Empty" || validateInput(fuelLevel)=== "Empty"|| validateInput(cargoMass)=== "Empty") {
        alert("all fields are required");
    }

    if (validateInput(pilot) === "Is a Number" || validateInput(copilot)=== "Is a Number" || validateInput(fuelLevel)=== "Not a Number"|| validateInput(cargoMass)=== "Not a Number") {
        alert("valid input(s) required");
 }

    //if all values correct, push to status box update status, send  feedback to user
//     if (validateInput(pilot) === "Not a Number") {
//         document.getElementById("pilotStatus").textContent = "asdf";
// }

 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch