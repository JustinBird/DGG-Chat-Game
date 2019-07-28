class Boss {

    constructor (name, health, maxHealth, armor) {
        this.name = name;
        this.health = health;
        this.maxHealth = maxHealth;
        this.armor = armor;
    }

    /**
     * Called when the boss takes damage.
     * 
     * @param {Int} combo 
     */
    takeDamage(combo) {

        // Combo must be greater than armor to deal damage.
        if (combo > this.armor) {
            
            if (this.health - combo < 0) {
                this.health = 0;
            } else {
                this.health -= combo;
            }
        }
    }

    /**
     * Called when the boss is healed.
     * 
     * @param {Int} combo 
     */
    heal(combo) {

        if (this.health + combo > this.maxHealth) {
            this.health = this.maxHealth;
        } else {
            this.health += combo;
        }
    }

    isDead() {
        return this.health == 0;
    }
}

module.exports = Boss;