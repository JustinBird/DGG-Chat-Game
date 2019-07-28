const Boss = require("./boss.js");

class Arena {

    constructor() {
    
        this.bosses = ["Shekels", "Blubstiny", "GODSTINY", "HmmStiny", "TRUMPED", "PEPE"];

        this.level = 0;
        this.getNewBoss();
        this.attackCombo = 0;
        this.healCombo = 0;
    }

    getNewBoss() {

        this.level += 1;

        const nameIndex = Math.floor(Math.random() * this.bosses.length)
        const name = this.bosses[nameIndex];
        const health = this.level * 10;
        const maxHealth = this.level * 10;
        this.boss = new Boss(name, health, maxHealth, 0);
    }

    onAttack() {
        this.healCombo = 0;
        this.attackCombo += 1;
        this.boss.takeDamage(this.attackCombo);

        if (this.boss.isDead()) {
            this.getNewBoss();
        }
    }

    onHeal() {
        this.attackCombo = 0;
        this.healCombo += 1;
        this.boss.heal(this.healCombo);
    }

    breakCombos() {
        this.attackCombo = 0;
        this.healCombo = 0;
    }

    formatJSON() {
        
        var object = new Object();

        object.boss = this.boss;
        object.level = this.level;
        object.attackCombo = this.attackCombo;
        object.healCombo = this.healCombo;

        return JSON.stringify(object);
    }
}

module.exports = Arena;