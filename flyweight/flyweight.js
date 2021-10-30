// Flyweight (this is what will be cached)
class Auto {
    constructor(model) {
        this.model = model;
    }
};

// Flyweight is intended to save the memory occupied by objects.
class AutoFactory {
    constructor(name) {
        this.models = {};
    }

    create(name) {
        let model = this.models[name];
        if (model) return model; // If the object is created (already in the pool), it simply returns a reference to it.
        this.models[name] = new Auto(name); // If the object is not created, then it is created and placed in its internal pool.
        console.log('new auto created');
        return this.models[name];
    }

    getSavedModels() {
        console.table(this.models);
    }
};




const factory = new AutoFactory();

const bmw = factory.create('BMW');
const volkswagen = factory.create('Volkswagen');
const mercedes = factory.create('Mercedes'); // created and saved new model
const redMercedes = factory.create('Mercedes'); // will be just a reference

factory.getSavedModels();
 
