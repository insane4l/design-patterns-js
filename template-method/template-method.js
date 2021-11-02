class Builder {
    build() {
        this.addEngine(); // 1st basic step
        this.addWheels(); // 2nd basic step
        this.addElectronics(); // 3rd basic step
    }
};

class BmwBuilder extends Builder {
    addWheels() {
        console.log('Add BMW wheels');
    }

    addEngine() {
        console.log('Add gasoline engine');
    }

    // anotherOption1 () {
    //     console.log('Another option 1');
    // }

    addElectronics() {
        console.log('Add standard electronics');
    }

    // anotherOption2 () {
    //     console.log('Another option 2');
    // }
};

class TeslaBuilder extends Builder {
    // doSomething() {
    //     console.log('Do something');
    // }

    addEngine() {
        console.log('Add electronic motor');
    }

    addElectronics() {
        console.log('Add special electronics');
    }

    addWheels() {
        console.log('Add Tesla wheels');
    }
};


const bmwBuilder = new BmwBuilder();
const teslaBuilder = new TeslaBuilder();

bmwBuilder.build();
teslaBuilder.build();

// The basic steps of the algorithms are defined inside the template class and are called in a specific order