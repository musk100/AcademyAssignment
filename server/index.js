const express = require("express")
const app = express()

const cors = require("cors")
const { response, request } = require("express")
const connection = require("./config/Database")
const AddController = require("./Controllers/AddController")
const DisableController = require("./Controllers/DisableController")
const LoginController = require("./Controllers/LoginController")

app.use(express.json())

app.get("/api/get", (request, response) => {
  const sqlGet = "SELECT * FROM taskmanagement_db"
  connection.query(sqlGet, (error, result) => {
    response.send(result)
  })
})

app.get("/", (request, response) => {
  // const sqlInsert = "INSERT INTO taskmanagement_db (username, email, password, usergroup) VALUES ('john doe', 'johndoe@gmail.com', 'username', 'project manager')"
  // connection.query(sqlInsert, (error, result) => {
  //   console.log("error", error)
  //   console.log("result", result)
  // response.send("Hello Express")
  // })
})

AddController(app)
DisableController(app)
LoginController(app)

app.listen(5000, () => {
  console.log("Server is running on port 5000")
})

module.export = app
