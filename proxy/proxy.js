class CarAccess {
    open() {
        console.log('The door is open');
    }

    close() {
        console.log('The door is closed');
    }
};


class SecuritySystem {
    constructor(door) {
        this.door = door;
    }

    open(password) {
        if ( this.authenticate(password) ) {
            this.door.open();
        } else {
            console.log('Access denied');
        }
    }

    authenticate(password) {
        return password === 'Ilon';
    }

    close() {
        this.door.close();
    }
};


const door = new SecuritySystem(new CarAccess);

door.open('Nate');
door.open('Ilon');
door.close();


// Proxy is a layer between requests and objects to which these requests are addressed
// Proxy is needed for additional operations