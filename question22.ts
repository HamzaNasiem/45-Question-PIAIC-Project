//  Question 22


// Create an object to store information about a person
const person22 = {
    firstName: "Hamza",
    lastName: "Naseem",
    age: 30,
    hobbies: ["Reading", "Learning", "Coding"],
    address: {
      city: "Karachi",
      state: "Pakistan",
    },
    sayHello: function () {
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    },
  };
  
  console.log(person22.hobbies[3]);  // This will cause an index error
  
  // Print information from the objects
  console.log("Person:", person22);
  
  // Call methods from the objects
  person22.sayHello();
  