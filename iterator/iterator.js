// Simple collection structure
// class Iterator {
//     constructor(elements) {
//         this.elements = elements;
//         this.index = 0;
//     }

//     getNext() {
//         return this.elements[this.index++]
//     }

//     hasNext() {
//         return this.elements.length > this.index;
//     }
// };

// const collection = new Iterator(['BMW', 'Tesla', 'Mercedes']);

// while ( collection.hasNext() ) {
//     console.log(collection.getNext());
// };



// Сomplex collection structure
class Iterator {
    constructor(elements) {
        this.elements = elements;
        this.keys = Object.keys(elements);
        this.index = 0;
    }

    getNext() {
        return this.elements[this.keys[this.index++]];
    }

    hasNext() {
        return this.keys.length > this.index;
    }
};

const cars = {
    bmw: {model: 'BMW', color: 'black', price: 40000},
    tesla: {model: 'Tesla', color: 'blue', price: 80000},
    mercedes: {model: 'Mercedes', color: 'white', price: 40000}
}

const collection = new Iterator(cars);

while ( collection.hasNext() ) {
    console.log(collection.getNext());
};