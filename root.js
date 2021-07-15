class Message {
    constructor(id, {content, author}) {
      this.id = id;
      this.content = content;
      this.author = author;
    }
  }
  
  const fakeDatabase = {}
  
const root = {
    postTitle: () => {
      return 'Build a Simple GraphQL Server With Express and NodeJS';
    },
    blogTitle: () => {
      return 'scotch.io';
    },
    rollThreeDice: () => {
      return [1, 5, 7]
    },
    rollDice: ({min, max, count}) => {
      
      const res = []
  
      for (let i = 0; i < count; i++) {
        res.push(Math.random() * (max - min) + min)
      }
  
      return res
  
    },
    getUsers: () => {
      return [
        {
          id: 5,
          name: "Jon"
        },
        {
          id: 6,
          name: "Alex"
        }
      ]
    },
    setMessage: ({message}) => {
      fakeDatabase.message = message;
      return message;
    },
    getMessage: () => {
      return fakeDatabase.message;
    },
    createMessage: ({input}) => {
      // Create a random id for our "database".
      const id = require('crypto').randomBytes(10).toString('hex');
   
      fakeDatabase[id] = input;
      return new Message(id, input);
    },
}

module.exports = root