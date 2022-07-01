const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mysql = require("mysql2")
const cors = require("cors")
const { response } = require("express")

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "gracielo",
  database: "assignment"
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/api/get", (request, response) => {
  const sqlGet = "SELECT * FROM taskmanagement_db"
  connection.query(sqlGet, (error, result) => {
    response.send(result)
  })
})

app.post("/api/post", (request, response) => {
  const { username, email, password, usergroup } = request.body
  const sqlInsert = "INSERT INTO taskmanagement_db (username, email, password, usergroup) VALUES (?, ?, ?, ?)"
  connection.query(sqlInsert, [username, email, password, usergroup], (error, result) => {
    if (error) {
      console.log(error)
    }
  })
})

app.get("/", (request, response) => {
  // const sqlInsert = "INSERT INTO taskmanagement_db (username, email, password, usergroup) VALUES ('john doe', 'johndoe@gmail.com', 'username', 'project manager')"
  // connection.query(sqlInsert, (error, result) => {
  //   console.log("error", error)
  //   console.log("result", result)
  response.send("Hello Express")
  // })
})

app.listen(5000, () => {
  console.log("Server is running on port 5000")
})
