// Write your helper functions here!

require('cross-fetch/polyfill');


function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
    // Here is the HTML formatting for our mission target div.
     let missionT = document.getElementById("missionTarget");
     missionT.innerHTML = (` 
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${image}">
                 `);

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

 if (validateInput(pilot) === "Not a Number" && validateInput(copilot)=== "Not a Number" && validateInput(fuelLevel)=== "Is a Number" && validateInput(cargoMass)=== "Is a Number") {

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
    cargoStatus.innerHTML = "Cargo mass low enough for launch";

}

    if (cargoMass >  10000) {
    list.style.visibility = "visible";
    h2.style.color = "red";
    h2.innerHTML = "Shuttle Not Ready for Launch";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch"`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    fuelStatus.innerHTML = "Fuel level high enough for launch";
}

if (fuelLevel < 10000 &&  cargoMass > 10000) {
    list.style.visibility = "visible";
    h2.style.color = "red";
    h2.innerHTML = "Shuttle Not Ready for Launch";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch"`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    fuelStatus.innerHTML = "Fuel level too low for launch";
}

    if  (fuelLevel >= 10000 && cargoMass <= 10000) {
    list.style.visibility = "visible";
    h2.style.color = "green";
    h2.innerHTML  = "Shuttle is Ready for Launch";
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch"`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
}
    
}  




 }

 async function myFetch() {
    let response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    let data = await response.json();
    return data;
    
    //  let planetsReturned;
 
    //  planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
    //     return response.json();
    //      });
 
    //  return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let randomNumber = Math.floor(Math.random()*planets.length)
    return planets[randomNumber]
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch