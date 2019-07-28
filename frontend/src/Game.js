import React from 'react';

function Game(props) {
    return (
        <div>
            Level: {props.level} <br />
            Boss: {props.boss.name} <br />
            Health: {props.boss.health} / {props.boss.maxHealth} <br />
            Armor: {props.boss.armor} <br />
            Attack Combo: {props.attackCombo} <br />
            Heal Combo: {props.healCombo} <br />
        </div>
    );
}

export default Game;