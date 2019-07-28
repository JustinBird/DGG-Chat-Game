const WebSocket = require("ws");
const UserList = require("./UserList.js");

class DGGSocket {

    constructor() {
        var ws = new WebSocket("wss://www.destiny.gg/ws");

        this.messageDispatcher = this.messageDispatcher.bind(this);

        ws.on('message', this.messageDispatcher);
    }
    
    /**
     * Callback function for PING message.
     * 
     * @param {Ping} ping 
     */
    onPing(ping) {
        console.log("Ping");

    }

    /**
     * Callback function for PONG message.
     * 
     * @param {Pong} pong 
     */
    onPong(pong) {
        console.log("Pong.");

    }

    /**
     * Callback function for MSG message.
     * 
     * @param {Message} message 
     */
    onMessage(message) {
        console.log(message.nick + ": " + message.data);
    }

    /**
     * Callback function for PRIVMSG message.
     * 
     * @param {PrivMessage} privMessage 
     */
    onPrivMessage(privMessage) {
        console.log("Private Message from " + privMessage.nick + ": " + privMessage.data);

    }

    /**
     * Callback function for MUTE message.
     * 
     * @param {Mute} mute 
     */
    onMute(mute) {
        console.log("Hello");

    }

    /**
     * Callback function for BAN message.
     * 
     * @param {Ban} ban 
     */
    onBan(ban) {
        console.log("Hello");

    }

    /**
     * Callback function for UNBAN message.
     * 
     * @param {Unban} unban 
     */
    onUnban(unban) {
        console.log("Hello");

    }

    onMode(mode) {
        console.log("Hello");

    }

    /**
     * Callback function for NAMES message.
     *
     * @param {Names} names 
     */
    onNames(names) {
        var ul = new UserList(names);
        console.log(names.connectioncount + " users in chat.");
    }

    onJoin(join) {
        console.log(join.nick + " has joined.");

    }

    onQuit(quit) {
        console.log(quit.nick + " has quit.");
    }

    onError(error) {
        console.log("Error");

    }

    onOpen(open) {
        console.log("Opened.");

    }

    onRefresh(refresh) {
        console.log("Refresh.");

    }

    onClose(close) {
        console.log("Closed.");

    }

    messageDispatcher(data) {
        // Finds the index of the end of first word in the data which is the message type.
        var endWord = data.indexOf(' ');    
        var messageType = data.substr(0, endWord);
        var message = data.substr(endWord + 1);
        const messageObj = JSON.parse(message);

        switch(messageType) {
            case "PING":
                this.onPing(messageObj);
                break;

            case "PONG":
                this.onPong(messageObj);
                break;
            
            case "MSG":
                this.onMessage(messageObj);
                break;

            case "PRIVMESSAGE":
                this.onPrivMessage(messageObj);
                break;

            case "MUTE":
                this.onMute(messageObj);
                break;

            case "UNMUTE":
                this.onUnmute(messageObj);
                break;

            case "MODE":
                this.onMode(messageObj);
                break;
    
            case "NAMES":
                this.onNames(messageObj);
                break;
            
            case "JOIN":
                this.onJoin(messageObj);
                break;
    
            case "QUIT":
                this.onQuit(messageObj);
                break;

            case "ERROR":
                this.onError(messageObj);
                break;
    
            case "REFRESH":
                this.onRefresh(messageObj);
                break;

            case "ERROR":
                this.onError(messageObj);
                break;
            
            case "REFRESH":
                this.onRefresh(messageObj);
                break;
        }
    }
}

module.exports = DGGSocket;