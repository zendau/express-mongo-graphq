const { buildSchema } = require('graphql')

const schema = buildSchema(`

  input ObjInvInput {
    h: Float,
    w: Float
  }

  type ObjInv {
    h: Float,
    w: Float
  }


  input MessageInput {
    content: String
    author: String
  }

  type Mutation {
    setMessage(message: String): String,
    createMessage(input: MessageInput): Message,
    addItem(item: String, size: ObjInvInput, status: String): String,
    updateItem(newItem: String, statusA: String, statusB: String) : String
  }


  type Inv {
    _id: ID,
    item: String,
    size: ObjInv,
    status: String
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
    findStatus: [Inv!],
    rollThreeDice: [Int],
    rollDice(min: Int!, max: Int!, count: Int!): [Float],
    getUsers: [User!],
    getMessage: String

  }
`)

module.exports = schema