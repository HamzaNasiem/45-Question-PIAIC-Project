"use strict";
// Question 19
let guestList19 = ["Hammad", "Ahsan", "Naseem", "Shahbaz", "Khalid", "Ammar", "Shafique"];
console.log("Original invitations:");
for (let i = 0; i < guestList19.length; i++) {
    console.log(`Dear ${guestList19[i]}, I would be honored to invite you to dinner. Please join me for a memorable evening.`);
}
let unableToAttend19 = guestList19[1];
console.log(`${unableToAttend19} can't make it to the dinner.`);
guestList19[1] = "Zeeshan";
console.log("\nNew invitations:");
for (let i = 0; i < guestList19.length; i++) {
    console.log(`Dear ${guestList19[i]}, I would be honored to invite you to dinner. Please join me for a memorable evening.`);
}
console.log("\nGreat news! We found a bigger dinner table.");
guestList19.unshift("Salmani"); // Add to the beginning
guestList19.splice(Math.floor(guestList19.length / 2), 0, "Stephen Hawking"); // Add to the middle
guestList19.push("Shahzad"); // Add to the end
// Print new set of invitation messages
console.log("\nFinal invitations with new guests:");
for (let i = 0; i < guestList19.length; i++) {
    console.log(`Dear ${guestList19[i]}, I would be honored to invite you to dinner. Please join me for a memorable evening.`);
}
console.log("\nSorry, we can only invite two people for dinner.");
while (guestList19.length > 2) {
    let removedGuest = guestList19.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
for (let i = 0; i < guestList19.length; i++) {
    console.log(`Dear ${guestList19[i]}, you're still invited to dinner.`);
}
console.log(`Total number of people invited to dinner: ${guestList19.length}`);
