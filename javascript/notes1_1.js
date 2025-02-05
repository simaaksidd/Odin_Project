// JavaScript follows traditional OOP concepts with objects. 


// this is how you initialize singular objects with the const constructor. 
const player = {
    name: "fish",
    age: '17',
    role: "tank"

};

// this is fine and dandy, but if you want an object class then you need to init it this way

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
      console.log(this.name)
    };
  }
const steve = new Player('steve', 'X');
const alsosteve = new Player('also steve', 'O');
steve.sayName(); // logs 'steve'
alsosteve.sayName(); // logs 'also steve'
  
// all object in js have a prototype. The prototype is an object which our actual object inherits 
// from and also 