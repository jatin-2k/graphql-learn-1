const UserList = require('../FakeData');

const resolvers = {
    Query: {
        users() {
            return UserList;
        },
        user: (parent, args) => {
            return UserList.filter((user) => user.id == args.id)[0]
        }
    }
}

module.exports = resolvers;