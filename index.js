const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const themeParkRides = ["Flatacoaster", "Flata-Ferris Wheel", "Flatburger Bumper Cars"];

function selectThemeParkRide () {
    function displayRideDetails(rideName) {
        if (!themeParkRides.includes(rideName)){
            console.log("Error: Invalid theme park ride!");
        }
        else {
            const ride = { name: rideName};
            if (ride.name === "Flatacoaster") {
                ride.description = "Flatacoaster is one of the tallest and quickest roller coasters in the WORLD! Flatiron's signature ride! If you're a thrill-seeker, HOP ON! and you'll be screaming 'FLATIRON!' in no time!"
            }
            else if (ride.name === "Flata-Ferris Wheel") {
                ride.description = "Can't bear the roller coasters? Opt for a relaxing ride cum lovely views on the Flata-Ferris Wheel! :D"
            }
            else if (ride.name = "Flatburger Bumper Cars") {
                ride.description = "Ride in our burger-shaped bumper cars and WIN a free flatburger! How COOL is that?!"
            }
            console.log(`You selected the ${ride.name} ride! Here's the description: ${ride.description}`);
        }
        readline.close();
    }

    readline.question("Please select a theme park ride:\n\n- Enter 'Flatacoaster' to select the Flatacoaster ride!\n Enter 'Flata-Ferris Wheel' to choose select the Flata-Ferris Wheel ride!\n Enter 'Flatburger Bumper Cars' to select the Flatburger Bumper Cars!\n > ", displayRideDetails)
}

 console.log("Welcome to Flatironland!");

 selectThemeParkRide();