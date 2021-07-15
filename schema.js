const { buildSchema } = require('graphql')

const schema = buildSchema(`

  input MessageInput {
    content: String
    author: String
  }

  type Mutation {
    setMessage(message: String): String,
    createMessage(input: MessageInput): Message,
  }

  type Message {
    id: ID!
    content: String
    author: String
  }

  type User {
    id: Int!
    name: String!
  }

  type Query {
    postTitle: String!,
    blogTitle: String!,
    rollThreeDice: [Int],
    rollDice(min: Int!, max: Int!, count: Int!): [Float],
    getUsers: [User!],
    getMessage: String

  }
`)

module.exports = schema