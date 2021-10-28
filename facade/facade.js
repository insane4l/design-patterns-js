class Conveyor {
    setBody() { console.log('Body set'); }
    getEngine() { console.log('Engine removed'); }
    setEngine() { console.log('Engine set'); }
    getInterior() { console.log('Update interior'); }
    setInterior() { console.log('Added interior'); }
    setExterior() { console.log('Exterior added'); }
    setWheels() { console.log('Wheels added'); }
    addElectronics() { console.log('Electronics added'); }
    paint() { console.log('Car painted'); }
};

class ConveyorFacade {
    constructor(car) {
        this.car = car;
    }

    assembleCar() {
        this.car.setBody();
        this.car.setEngine();
        this.car.setInterior();
        this.car.setExterior();
        this.car.setWheels();
        this.car.addElectronics();
        this.car.paint();
    }

    changeEngine() {
        this.car.getEngine();
        this.car.setEngine();
    }

    changeInterior() {
        this.car.getInterior();
        this.car.setInterior();
    }
};


const carConveyor = new ConveyorFacade(new Conveyor());
let car = carConveyor.assembleCar();
car = carConveyor.changeEngine();
car = carConveyor.changeInterior();

// console.log(car);


// Facade pattern hides complex logic behind a simple facade:
// - combines different complex structures and hides inside itself
// - gives out a clear interface of interaction