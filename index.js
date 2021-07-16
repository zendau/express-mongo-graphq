const express = require('express')
const app = express()


const {graphqlHTTP} = require('express-graphql')
const MongoClient = require('mongodb').MongoClient

const schema = require("./schema")
const root = require("./root")


const port = 3000



app.use('/query', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true 
}))           
                 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {

  console.log(`Example app listening at http://localhost:${port}`)

  MongoClient.connect('mongodb://localhost:27017/', { useUnifiedTopology: true },  (err, client) => {
  if (err) throw err

  const db = client.db('animals')

  global.DB = db.collection("inventory")

  console.log("connected to animals")

  // db.collection('mammals').find().toArray(function (err, result) {
  //   if (err) throw err

  //   console.log(result)
  // })
})

 
})


