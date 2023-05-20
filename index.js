class Car {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getDescription() {
        return `A ${this.make} ${this.model} from ${this.year}.`
    }
}

class ElectricCar extends Car {
    constructor (make, model, year, range){
        super(make, model, year);
        this.range = range;
    }
    getDescription() {
        return `A ${this.make} ${this.model} from ${this.year}. It has a range of ${this.range} miles.`
    }
}

module.exports = { Car, ElectricCar }
