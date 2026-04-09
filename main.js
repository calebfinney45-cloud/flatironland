const rdl = require('readline').createInterface ({
    input: process.stdin,
    output: process.stdout
});

const themeParkRides = ['Roller Coaster', 'Ferris Wheel', 'Bumper Cars'];

function selectThemeParkRide () {
    rdl.question ("Please select a theme park ride:\n\n- Enter 'Roller Coaster' to select Roller Coaster as your ride\n- Enter 'Ferris Wheel' to select Ferris Wheel as you ride\n- Enter 'Bumper Cars' as your ride\n > " ,
       (rideName) => {
        if (!themeParkRides.includes(rideName)){
            console.log("Error: Invalid choice!");
        }
        else {
            const ride = {name: rideName};
            if (ride.name === 'Roller Coaster') {
                ride.describe = "A fun but thrilling ride, be sure to buckle up! ...because you're in for a TREAT!"
            }
            else if (ride.name === 'Ferris Wheel'){
                ride.describe = "If you prefer chill, then THIS is the one for you! Enjoy a breathtaking view from the city as you coarse greater heights!"
            } 
            else if (ride.name === 'Bumper Cars') {
                ride.describe = "Is chaos your thing? Then this one's perfect for ya! Bump into others and relish the recoil as it propells you in a another direction :D."
            }
            console.log(`You selected the ${ride.name} as your ride! \n Here is the description: ${ride.describe}`);
            }
            rdl.close();
        }
    )    
}

console.log("Welcome to Demo Theme Park!");

selectThemeParkRide();