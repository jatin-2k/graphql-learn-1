var UserList = require('../FakeData');

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
    },

    Mutation: {
        createUser: (parent, args) => {
            const user = args.input
            const lastId = UserList[UserList.length-1].id
            UserList.push({...user, id: lastId+1});
            return UserList[UserList.length-1];
        },
        updateUserName: (parent, args) => {
            const {id, username} = args.input
            UserList.forEach((user) => {
                if(user.id == id){
                    user.username = username
                }
            })
            return UserList.filter((user) => user.id == id)[0];
        },
        deleteUser: (parent, args) => {
            const id = args.id
            UserList = UserList.filter((user) => user.id != id);
            return id;
        }
    }
}

module.exports = resolvers;