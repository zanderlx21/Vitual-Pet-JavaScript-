/*
Step 1: Prompt user for the pet's name, 
            store in variable "name"
Step 2: Loop prompt 6 times asking "feed, pet, or walk?"
            store input in variable "action"
Step 3: Calculate Happiness & Energy based on user action
        - Feed increases energy by 2
        - Pet increases happiness by 1
        - Walk increases happiness by 2 
        - Walk decreases energy by 1
            - If energy = 0 then ALERT "not enough energy to enjoy a walk"
Step 4: Print name, happiness & energy in console
*/

let petName = prompt ("Name your pet.");
    console.log(petName);
let happiness = 0;
let energy = 0;

for (i = 0; i < 6; i++) {
    let action = prompt ("feed, pet, or walk?");

    if (action == "feed") {
        energy += 2;
        console.log(action);
    }

    if (action == "pet") {
        happiness += 1;
        console.log(action);
    }

    if (action == "walk" && energy > 0) {
        happiness += 2;
        energy -= 1;
        console.log(action);
    } else if (action == "walk" && energy == 0 ) {
        alert ("Not enough energy to enjoy a walk")
    }
}

console.log (petName + " has " + happiness + " happiness and " + energy + " energy.");