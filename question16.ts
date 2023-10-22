// Question 16

// Create a list of people to invite to dinner
let guestList16: string[] = ["Ahsan", "Hammad", "Shahbaz", "Wasif"];

// Print messages inviting each person to dinner
console.log("Original invitations:");
for (let i = 0; i < guestList16.length; i++) {
    console.log(`Dear ${guestList16[i]}, I would be honored to invite you to dinner. Please join me for a memorable evening.`);
}

// Guest who can't make it
let unableToAttend16: string = guestList16[1];
console.log(`${unableToAttend16} can't make it to the dinner.`);

// Replace the guest who can't make it with a new guest
guestList16[1] = "Qasim";

// Print new invitation messages
console.log("\nNew invitations:");
for (let i = 0; i < guestList16.length; i++) {
    console.log(`Dear ${guestList16[i]}, I would be honored to invite you to dinner. Please join me for a memorable evening.`);
}

// Inform about the bigger dinner table
console.log("\nGreat news! We found a bigger dinner table.");

// Add new guests
guestList16.unshift("Naseem"); // Add to the beginning
guestList16.splice(Math.floor(guestList16.length / 2), 0, "Waqar"); // Add to the middle
guestList16.push("Faizan"); // Add to the end

// Print new set of invitation messages
console.log("\nFinal invitations with new guests:");
for (let i = 0; i < guestList16.length; i++) {
    console.log(`Dear ${guestList16[i]}, I would be honored to invite you to dinner. Please join me for a memorable evening.`);
}