
class Car {
    startEngine(engine) {
        engine.simpleInterface();
    }
};

class Engine2 {
    simpleInterface() {
        console.log('2.0 engine. Lets GO!');
    }
};

class EngineV8 {
    complexInterface() {
        console.log('V8 engine. Lest GO!');
    }
};

// ADAPTER
class EngineV8Adapter {
    constructor(engine) {
        this.engine = engine;
    }

    simpleInterface() {
        this.engine.complexInterface();
    }
};


// Trying to start a car with an simple engine through a simple interface
// const myCar = new Car();
// const oldEngine = new Engine2();
// myCar.startEngine(oldEngine); // 2.0 engine. Lets GO!


// Trying to start a car with an complex engine through a simple interface(using an adapter)
// const myCar = new Car();
// const engineAdapter = new EngineV8Adapter( new EngineV8() );
// myCar.startEngine(engineAdapter); // V8 engine. Lest GO!


// Trying to start a car with an complex engine through a simple interface(without adapter)
// const myCar = new Car();
// const engineWithoutAdapter = new EngineV8();
// myCar.startEngine(engineWithoutAdapter); // Error