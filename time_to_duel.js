class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost)
        this.power = power;
        this.resilience = resilience
    }

    
    attack( target ) {
        if( target instanceof Unit ) {
        console.log(`${this.name} has attacked ${target.name} and ${target.name}'s resilience has been reduced by ${this.power}.`);
        target.resilience += this.power;
        return target;        
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }

}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target) {
        if (target instanceof Unit) {
            console.log(`${this.name} effect was used on ${target.name}, and ${target.name}'s ${this.stat} ${this.text} ${this.magnitude}.`);
            this.stat === "power" ? target.power += this.magnitude : target.resilience+= this.magnitude;
        return target;

        } else {
            throw new Error("Target must be a unit!");
        }
    }
        
}



// const RedNinja = new Unit('Red Belt Ninja', 3, 3, 4);
// const BlackNinja = new Unit('Black Belt Ninja', 4, 5, 4);
// const HardAlgorithm = new Effect('Hard Algorithm', 2,"Increase target's resilience by 3", this.resilience, 3);
// const UPR = new Effect('Unhandled Promise Rejection', 1,"Reduce target's resillience by 2", this.resilience, -2);
// const PP = new Effect('Pair Programming', 3,"Increase target's power by 2", this.power, 2);

const RedNinja = new Unit('Red Belt Ninja', 3, 3, 4);
const HardAlgorithm = new Effect('Hard Algorithm', 2,"i", 'resilience', 3);
HardAlgorithm.play(RedNinja);
const BlackNinja = new Unit('Black Belt Ninja', 4, 5, 4);
const UPR = new Effect('Unhandled Promise Rejection', 1, "was changed by", 'resilience', -2);
UPR.play(BlackNinja);
const PP = new Effect('Pair Programming', 3, "was changed by", 'power', 2);
PP.play(RedNinja);
RedNinja.attack(BlackNinja);
