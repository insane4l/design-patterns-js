class Memento {
    constructor(value) {
        this.value = value;
    }
};

const creator = {
    save: value => new Memento(value),
    restore: memento => memento.value
};

class Caretaker {
    constructor() {
        this.values = [];
    }

    addMemento(memento) {
        this.values.push(memento);
    }

    getMemento(index) {
        return this.values[index];
    }
};



const careTaker = new Caretaker();

careTaker.addMemento(creator.save('Hello'));
careTaker.addMemento(creator.save('Hello World'));
careTaker.addMemento(creator.save('Hello World!!!!!'));

console.log(careTaker.getMemento(1));

// Memento it is a pattern allows you to save and restore the previous state of the object