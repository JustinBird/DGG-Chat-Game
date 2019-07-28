class UserList {

    constructor(names) {
        this.UserList = new Map();

        const currentTime = Date.now();
        for (var user of names.users) {
            user.timestamp = currentTime;
            console.log(user);
        }
    }
}

module.exports = UserList;