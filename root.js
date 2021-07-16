const { Db } = require('mongodb');

class Message {
    constructor(id, {content, author}) {
      this.id = id;
      this.content = content;
      this.author = author;
    }
  }
  
  const fakeDatabase = {}
  
const root = {
    findStatus: async () => {
      const res = await DB.find({ status: { $in : ["A", "D"] }})
      const data = await res.toArray()
      return data
      
      //return 'Build a Simple GraphQL Server With Express and NodeJS';
    },
    addItem: async ({item, size, status}) => {
      console.log("item", item)
      console.log("size", size.h +" "+size.w)
      console.log("status", status)
      

      const res = await DB.insertOne({
        item,
        size,
        status
      })

      console.log(res)

      return ` Item with id -  ${res.insertedId} success added `
    },
    updateItem: async ({newItem, statusA, statusB}) => {

      const res = await DB.updateOne({$or: [{status: statusA}, {status: statusB}]}, {
        // Приминение нового значения
        $set: {item: newItem },
        // Изменение поля последнего изменения
        $currentDate: { lastModified: true }
      })

      console.log(res)

      console.log(newItem, statusA, statusB)
      return "Item updated"
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
      const id = require('crypto').randomBytes(10).toString('hex')
      
      fakeDatabase[id] = input
      return new Message(id, input)
    },
}

module.exports = root