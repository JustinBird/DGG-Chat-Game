import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GameContainer from './GameContainer.js';
import * as serviceWorker from './serviceWorker';

var bossObject = {name: "hello", health: 10, maxHealth: 20, armor: 20}
console.log(bossObject.name);
ReactDOM.render(<GameContainer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
