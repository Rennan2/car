class Vechicle{
    constructor(make,model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return "Beep.";

    }
    toString(){
        return 'the vechicle is a ${this.make} ${this.model} from ${this.year}.';

    }
}

class car extends Vechicle{
    constructor(make, model, year){
        super(make, model,year);
        this.numWheels = 4;

    }

}

class Motorcycle extends Vechicle{
    constructor(make, model, year){
        super(make,model,year)
        this.numWheels = 2;
    }
    revEngine(){
        return "VROOM!!!";
    }
}

class Garage{
    constructor(capacity){
        this.vechicle = [];
        this.capacity = capacity;
    }
    add(vechicle){
        if (!(vechicle instanceof Vechicle)){
            return "Only vehicles are allowed in here!";
        }
        if(this.vechicle.length >= this.capacity){
            return "sorry,we're full";
        }
        this.vechicle.push(vechicle);
        return "vechile added!"
    }
}
