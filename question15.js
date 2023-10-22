"use strict";
// Question 15
// Create a list of people to invite to dinner
let guestList15 = ["Ahsan", "Hammad", "Shahbaz"];
// Print messages inviting each person to dinner
for (let i = 0; i < guestList15.length; i++) {
    console.log(`Dear ${guestList15[i]}, I would be honored to invite you to dinner. Please join me for a memorable evening.`);
}
// Guest who can't make it
let unableToAttend = guestList15[1];
console.log(`${unableToAttend} can't make it to the dinner.`);
// Replace the guest who can't make it with a new guest
guestList15[1] = "Wasif";
// Print new invitation messages
console.log("\nNew invitations:");
for (let i = 0; i < guestList15.length; i++) {
    console.log(`Dear ${guestList15[i]}, I would be honored to invite you to dinner. Please join me for a memorable evening.`);
}
