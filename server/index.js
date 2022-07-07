const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const { response, request } = require("express")
const session = require("express-session")
const connection = require("./config/Database")
const AddController = require("./Controllers/AddController")
const DisableController = require("./Controllers/DisableController")
const LoginController = require("./Controllers/LoginController")

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24
    }
  })
)

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
