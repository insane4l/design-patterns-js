class Equipment {
    getPrice() {
        return this.price || 0;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    setPrice(price) {
        this.price = price;
    }
};



class Body extends Equipment{
    constructor() {
        super();
        this.setName('Body');
        this.setPrice(5000);
    }
};

class Interier extends Equipment{
    constructor() {
        super();
        this.setName('Interier');
        this.setPrice(3000);
    }
};

class Engine extends Equipment{
    constructor() {
        super();
        this.setName('Engine');
        this.setPrice(1500);
    }
};

class Wheels extends Equipment{
    constructor() {
        super();
        this.setName('Wheels');
        this.setPrice(600);
    }
};



class Composite extends Equipment {
    constructor() {
        super();
        this.selectedEquipment = [];
    }

    add(equipment) {
        this.selectedEquipment.push(equipment);
    }

    getPrice() {
        return this.selectedEquipment
            .map( el => el.getPrice() ) // delegates methods
            .reduce( (a, b) => a + b );
    }
};



class Car extends Composite {
    constructor() {
        super();
        this.setName('BMW');
    }
};




const myCar = new Car();

myCar.add( new Body() );
myCar.add( new Interier() );
myCar.add( new Engine() );
myCar.add( new Wheels() );

console.log(`${myCar.getName()} price is ${myCar.getPrice()}`);




// The pattern is built on a tree structure.

// The root component has no actions of its own
// it calls methods of nested components
// (root component delegates calls to all nested components along the chain)