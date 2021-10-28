// Base class
class Car {
    constructor() {
        this.model = 'Car';
        this.price = 10000;
    }

    getDescription() {
        return this.model;
    }

    getPrice() {
        return this.price;
    }
};

// Tesla based on Car
class Tesla extends Car {
    constructor() {
        super();
        this.model = 'Tesla';
        this.price = 80000;
    }
};

// Bmw based on Car
class Bmw extends Car {
    constructor() {
        super();
        this.model = 'BMW';
        this.price = 40000;
    }
};

// Decorator add new options (autopilot added and price changed)
class WithAutopilot {
    constructor(car) {
        this.car = car;
    }

    getDescription() {
        return `${this.car.getDescription()} with Autopilot`;
    }

    getPrice() {
        return this.car.getPrice() + 5000;
    }
};

// Decorator add new options (parktronic added and price changed)
class WithParktronic {
    constructor(car) {
        this.car = car;
    }

    getDescription() {
        return `${this.car.getDescription()} with Parktronic`;
    }

    getPrice() {
        return this.car.getPrice() + 1500;
    }
};






const PlainBmw = new Bmw(); // Base BMW car
let MpackBmw = new WithAutopilot(PlainBmw);
MpackBmw = new WithParktronic(MpackBmw); // BMW with autopilot and parktronic

// console.log(PlainBmw.getDescription() + ' cost ' + PlainBmw.getPrice() + ' euro');
// console.log(MpackBmw.getDescription() + ' cost ' + MpackBmw.getPrice() + ' euro');


let tesla = new Tesla();
let bmw = new Bmw();
tesla = new WithAutopilot(tesla);
bmw = new WithAutopilot(bmw);
// console.log(tesla.getDescription() + ' cost ' + tesla.getPrice() + ' euro');
// console.log(bmw.getDescription() + ' cost ' + bmw.getPrice() + ' euro');


// Decorator Pattern - for wrap an already existing class and extend its functionality