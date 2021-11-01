class Account {
    pay(orderPrice) {
        if ( this.canPay(orderPrice) ) {
            console.log(`Paid ${orderPrice}$ with ${this.name} account`);
        } else if (this.incomer) {
            console.log(`Not enough money in ${this.name} account`);
            this.incomer.pay(orderPrice);
        } else {
            console.log('Your accounts do not have the required amount of money');
        }
    }

    canPay(amount) {
        return this.balance >= amount;
    }

    setNext(account) {
        this.incomer = account;
    }

    showAccount() {
        console.log(this);
    }
};



class Master extends Account {
    constructor(balance) {
        super();
        this.name = 'Master Card';
        this.balance = balance;
    }
};

class PayPal extends Account {
    constructor(balance) {
        super();
        this.name = 'Paypal';
        this.balance = balance;
    }
};

class Qiwi extends Account {
    constructor(balance) {
        super();
        this.name = 'Qiwi';
        this.balance = balance;
    }
};




// Set system balance
const master = new Master(200);
const paypal = new PayPal(400);
const qiwi = new Qiwi(600);

// Define chain 
master.setNext(paypal);
paypal.setNext(qiwi);

// Start payment
master.pay(500);

master.showAccount();