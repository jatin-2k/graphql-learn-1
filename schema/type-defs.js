const {gql} = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User!]
    }

    type Query {
        users: [User!]!
        user(id: ID!): User!
    }

    input CreateUserInput {
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = indian #default value when not passed
    }

    input UpdateUserNameInput {
        id: ID!
        username: String!
    }

    type Mutation {
        createUser(input: CreateUserInput!): User!
        updateUserName(input: UpdateUserNameInput): User!
        deleteUser(id: ID!): ID!
    }

    enum Nationality {
        russian
        mexican
        canadian
        american
        indian
    }
`

module.exports = typeDefs;