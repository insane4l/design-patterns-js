class Bmw {
    constructor(model, price, maxSpeed) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}

class BmwFactory {
    create(type) {
        if (type === 'X5') return new Bmw('X5', 30000, 250);
        if (type === 'X6') return new Bmw('X6', 40000, 300);
    }
}


const factory = new BmwFactory();

const bmwX5 = factory.create('X5');
const bmwX6 = factory.create('X6');

// console.log(bmwX5);
// console.log(bmwX6);