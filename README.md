## Goal/Objective
Build an interactive feature that logs a custom message based on user's choice of ride.

### Steps
<ins>1.Define outer functions and variables</ins>
  Define a list of rides available as an array and create the outer funcion.*This handles the task of ride selection*

<ins>2.Add user input and validation to outer</ins> functions
  Inside the outer function, add a prompt to obtain user's selected ride and validate it.If invalid ride is entered, error messsage is displayed
  *We'll use readline to allow prompting in the CLI*

<ins>3.Create Inner Function</ins>
 Here, we will tweak the code in main.js but as a seperate file(index.js).
 Inside the outer function(name selectThemeParkRIde), we add a nested function(name displayRideDetails) that accesses data from the ride object created in outer function.

 
**Note**: *Step 3 defined the inner function, refactoring our logic into a reusable nested function.*