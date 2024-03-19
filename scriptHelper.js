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
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    if (validateInput(pilot) === "Empty" || validateInput(copilot)=== "Empty" || validateInput(fuelLevel)=== "Empty"|| validateInput(cargoMass)=== "Empty") {
        alert("all fields are required");
    }

    if (validateInput(pilot) === "Is a Number" || validateInput(copilot)=== "Is a Number" || validateInput(fuelLevel)=== "Not a Number"|| validateInput(cargoMass)=== "Not a Number") {
        alert("valid input(s) required");
 }

    //if all values correct, push to status box update status, send  feedback to user
//     if (validateInput(pilot) === "Not a Number") {
//         document.getElementById("pilotStatus").textContent = "asdf";
let pilotStatus = document.getElementById("pilotStatus");
let copilotStatus = document.getElementById("copilotStatus");
let fuelStatus = document.getElementById("fuelStatus");
let cargoStatus = document.getElementById("cargoStatus"); 
let h2 = document.getElementById("launchStatus");



if (fuelLevel < 10000) {
    list.style.visibility = "visible";
    fuelStatus.innerHTML = "Fuel level too low for launch";
    h2.style.color = "red";
    h2.innerHTML = "Shuttle Not Ready for Launch";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch"`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

}

if (cargoMass >  10000) {
    list.style.visibility = "visible";
    h2.style.color = "red";
    h2.innerHTML = "Shuttle Not Ready for Launch";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch"`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
}

if  (fuelLevel > 10000 && cargoMass < 10000) {
    list.style.visibility = "visible";
    h2.style.color = "green";
    h2.innerHTML  = "Shuttle is Ready for Launch";
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch"`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
}

 }

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