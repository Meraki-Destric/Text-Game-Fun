let inventory = []

let inventoryLimit = 6;

class ConsumableItem{
    constructor(name, health, effect) {
        this.name = name;
        this.health = health;
        this.effect = effect
    }
}

class BuffItem {
    constructor(name, buff, duration) {
        this.name = name;
        this.buff = buff;
        this.duration = duration;
    }
}

class Weapon {
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }
}

const items = [new Weapon("Sword", 5), new ConsumableItem("Apple", 5, "minus"), new BuffItem("Potion", "Regeneration", 5)]


