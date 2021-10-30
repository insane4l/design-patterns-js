class OfficialDealer {
    constructor() {
        this.customers = [];
    }

    orderAuto(customer, auto, info) {
        const name = customer.getName();

        console.log(`Order name: ${name}. Order auto is ${auto}`);
        console.log(`Additional info: ${info}`);
        this.addCustomersList(name);
    }

    addCustomersList(name) {
        this.customers.push(name);
    }

    getCustomersList() {
        return this.customers;
    }
};


class Customer {
    constructor(name, dealerMediator) {
        this.name = name;
        this.dealerMediator = dealerMediator;
    }

    getName() {
        return this.name;
    }

    makeOrder(auto, info) {
        this.dealerMediator.orderAuto(this, auto, info)
    }
};



const mediator = new OfficialDealer();

const roman = new Customer('Roman', mediator);
const egor = new Customer('Egor', mediator);

roman.makeOrder('BMW', 'Black, with parktronic');
egor.makeOrder('Volkswagen', 'Grey');
console.log( mediator.getCustomersList() );


// A mediator contains connections between various elements. 
// So this elements will be reusable. (separated from the logic that connects them to each other)

// (example with dropdowns: country selection, then city selection is shown, etc.
// Components cannot be used separately)