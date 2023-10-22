"use strict";
// Question 18
// Create an array of places to visit
let placesToVisit = ["Mecca", "Madinah", "Iraq", "Baghdad", "India"];
// Print the original order
console.log("Original Order:", placesToVisit);
// Print in alphabetical order without modifying the original list
console.log("Alphabetical Order:", [...placesToVisit].sort());
// Check if the original order is still intact
console.log("Original Order After Alphabetical Print:", placesToVisit);
// Print in reverse alphabetical order without modifying the original list
console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());
// Check if the original order is still intact
console.log("Original Order After Reverse Alphabetical Print:", placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
// Reverse the order again to return to the original order
placesToVisit.reverse();
console.log("Original Order After Reversing Twice:", placesToVisit);
// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Alphabetical Order After Sorting:", placesToVisit);
// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Reverse Alphabetical Order After Sorting:", placesToVisit);
