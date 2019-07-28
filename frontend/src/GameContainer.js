import React from 'react';
import Game from './Game.js';

class GameContainer extends React.Component {

    constructor(props) {
        super(props);

        this.ws = new WebSocket("ws://localhost:8080");

        this.ws.onmessage = function(event) {
            console.log(event.data);

            this.setState((state, props) => {
                return JSON.parse(event.data)
            });
        }.bind(this);

        this.state = {
            level: 0,
            boss: {
                name: "",
                health: 0,
                maxHealth: 0,
                armor: 0,
            },
            attackCombo: 0,
            healCombo: 0,
        }
    }


    render() {
        return (
                <Game 
                    level={this.state.level} 
                    boss={this.state.boss} 
                    attackCombo={this.state.attackCombo} 
                    healCombo={this.state.healCombo} 
                />
        );
    }
}

export default GameContainer;
