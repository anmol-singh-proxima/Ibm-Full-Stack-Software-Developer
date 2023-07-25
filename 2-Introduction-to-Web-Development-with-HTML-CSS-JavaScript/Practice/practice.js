/* Function Prototype */
function Car (make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
}
Car.prototype.getName = function() {
    return this.make + " " + this.model + " " + this.year + " " + this.color;
}
let car = new Car("Mahindra", 'Thar', 2023, "Black");
console.log("Car Name:", car.getName());

/* Self Executing Function */
(function() {
    const name = 'Anmol Singh';
    const age = 25;
    console.log(`${name} is ${age} years old.`);
})();

/* Arrays in Javascript */
let myArray = ["Jack","Jill",4,5,true,"John"]
for (const [index, value] of Object.entries(myArray)) {
  console.log(index, " - ", value);
}
let newArray = myArray.forEach(element => {
    console.log(element);
    return element;
});
console.log("newArray:", newArray);

/* Maps in Javascript */
let myMap = new Map(); 
myMap.set("name", "John")
myMap.set("age", 22)
myMap.forEach((val,key) => {
    console.log(key, " - ", val)
})