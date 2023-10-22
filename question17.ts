// Question 17

// Create a list of people to invite to dinner
let guestList17: string[] = ["Ahsan", "Hammad", "Wasif", "Shahbaz", "Qasim", "Shahid", "Salman"];

// Print messages inviting each person to dinner
console.log("Original invitations:");
for (let i = 0; i < guestList17.length; i++) {
    console.log(`Dear ${guestList17[i]}, I would be honored to invite you to dinner. Please join me for a memorable evening.`);
}

// Guest who can't make it
let unableToAttend17: string = guestList17[1];
console.log(`${unableToAttend17} can't make it to the dinner.`);

// Replace the guest who can't make it with a new guest
guestList17[1] = "Isaac Newton";

// Print new invitation messages
console.log("\nNew invitations:");
for (let i = 0; i < guestList17.length; i++) {
    console.log(`Dear ${guestList17[i]}, I would be honored to invite you to dinner. Please join me for a memorable evening.`);
}

// Inform about the bigger dinner table
console.log("\nGreat news! We found a bigger dinner table.");

// Add new guests
guestList17.unshift("Galileo Galilei"); // Add to the beginning
guestList17.splice(Math.floor(guestList17.length / 2), 0, "Stephen Hawking"); // Add to the middle
guestList17.push("Ada Lovelace"); // Add to the end

// Print new set of invitation messages
console.log("\nFinal invitations with new guests:");
for (let i = 0; i < guestList17.length; i++) {
    console.log(`Dear ${guestList17[i]}, I would be honored to invite you to dinner. Please join me for a memorable evening.`);
}

// Inform that only two guests can be invited
console.log("\nSorry, we can only invite two people for dinner.");

// Remove guests until only two names remain
while (guestList17.length > 2) {
    let removedGuest = guestList17.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print a message to the two remaining guests
for (let i = 0; i < guestList17.length; i++) {
    console.log(`Dear ${guestList17[i]}, you're still invited to dinner.`);
}

// Remove the last two names from the list
guestList17.pop();
guestList17.pop();

// Check if the list is empty
if (guestList17.length === 0) {
    console.log("\nThe guest list is now empty.");
} else {
    console.log("\nThere are still guests on the list.");
}