const Arena = require("./arena.js");
const DGGSocket = require("./DGGSocket.js");
const WebSocket = require('ws');

const a = new Arena();
const dgg = new DGGSocket();
const wss = new WebSocket.Server({port: 8080});

 dgg.onMessage = function(message) {

    if (message.data == a.boss.name) {
        a.onAttack();

    } else if (message.data == "AngelThump") {
        a.onHeal();

    } else {
        a.breakCombos();

    }

    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(a.formatJSON());
        }
    });
}
