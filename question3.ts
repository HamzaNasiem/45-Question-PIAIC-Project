// Question 03


// Store the person's name in a variable
let personName3: string = "Hamza Naseem";

// Print in lowercase
console.log("Lowercase:", personName3.toLowerCase());

// Print in uppercase
console.log("Uppercase:", personName3.toUpperCase());

// Convert to titlecase and print
console.log("Titlecase:", personName3.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));