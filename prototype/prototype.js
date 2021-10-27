class TeslaCar {
    constructor(model, price, color, autopilot) {
        this.model = model;
        this.price = price;
        this.color = color;
        this.autopilot = autopilot;
    }

    clone() {
        return new TeslaCar(this.model, this.price, this.color, this.autopilot);
    }
}

// Set base auto
const prototypeCar = new TeslaCar('S', 90000, 'black', false);

// Clone of base auto
const car1 = prototypeCar.clone();
const car2 = prototypeCar.clone();
const car3 = prototypeCar.clone();

// Сhanges to one of the cars
car2.color = "red";
car2.autopilot = true;

// Using this pattern, we can create a copy of an object with minimal memory consumption,
// since the copy is based on an already existing structure
// if necessary, you can change the properties of a specific object
// console.log(car1);
// console.log(car2);
// console.log(car3);