class Car {
    constructor() {
        this.autoPilot = false;
        this.parktronic = false;
        this.signaling = false;
    }
};


class CarBuilder {
    constructor() {
        this.car = new Car();
    }

    addAutoPilot(autoPilot) {
        this.car.autoPilot = autoPilot;
        return this;
    }

    addParkTronic(parkTronic) {
        this.car.parktronic = parkTronic;
        return this;
    }

    addSignailing(signaling) {
        this.car.signaling = signaling;
        return this;
    }

    updateEngine(engine) {
        this.car.engine = engine;
        return this;
    }

    build() {
        return this.car;
    }
};

const myCar = new CarBuilder()
                    .addAutoPilot(true)
                    .updateEngine('V8')
                    .build();


// console.log(myCar);



// This pattern is used to create objects with complex states

// The builder pattern allows you to create complex objects,
// the initialization of which is problematic to fit in the constructor

// One of the features of this pattern - methods can be called along the chain 
// (in each method we return this, so that each of the methods can work with the context)