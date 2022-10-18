const UserList = require('../FakeData');

const resolvers = {
    Query: {
        users() {
            return UserList;
        },
        user: (parent, args) => {
            return UserList.filter((user) => user.id == args.id)[0]
        }
    },

    User: {
        friends: (parent) => {
            return UserList.filter((user) => user.nationality == parent.nationality && user.id != parent.id);
        }
    }
}

module.exports = resolvers;