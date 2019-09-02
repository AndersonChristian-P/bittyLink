require("dotenv").config()

const express = require("express")
const app = express()
const { SERVER_PORT, CONNECTION_STRING } = process.env
const massive = require("massive")

// --  MIDDLEWARE -- //
app.use(express.json())

// -- MASSIVE -- //
massive(CONNECTION_STRING).then((database) => {
  app.set("db", database)
  console.log("database set!")
  console.log(database.listTables())
  app.listen(SERVER_PORT, () => {
    console.log(`listening on port ${SERVER_PORT}`)
  })
})


