//  Question  21

const person = {
    firstName: "Hamza",
    lastName: "Naseem",
    age: 30,
    hobbies: ["Reading", "Coding", "Sleeping"],
    address: {
      city: "Karachi",
      state: "Pakistan",
    },
    sayHello: function () {
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    },
  };
  
  const car = {
    make: "Toyota",
    model: "Camry",
    year: 2023,
    features: ["Bluetooth", "Backup Camera", "Navigation"],
    start: function () {
      console.log("Starting the car...");
    },
  };
  
  console.log("Person:", person);
  console.log("Car:", car);
  
  person.sayHello();
  car.start();

  