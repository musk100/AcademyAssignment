const connection = require("../config/Database")
const jwt = require("jsonwebtoken")
const { request, response } = require("express")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const bodyParser = require("body-parser")
const express = require("express")
const app = express()
const path = require("path")

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
)

//hasshing password
const bcrypt = require("bcrypt")
const saltRound = 10

const login = function (app) {
  // app.get("/login", (request, response) => {
  //   if (request.session.user) {
  //     response.send({ loggedIn: true, user: request.session.user })
  //   } else {
  //     response.send({ loggedIn: false })
  //   }
  // })
  app.post("/login", (request, response) => {
    //login user
    const username = request.body.username
    const password = request.body.password

    //Ensure the input fields exists and are not empty
    if (username && password) {
      connection.query("SELECT * FROM taskmanagement_db WHERE username = ? AND password = ?", [username, password], (error, results) => {
        //if there is an issue with the query, output the error
        if (error) {
          response.send({ error: error })
        }
      })
      //if account exists
      if (result.length > 0) {
        // Authenticate the user
        request.session.loggedin = true
        request.session.username = username
        // Redirect to home page
        response.redirect("/mainmenu")
      } else {
        response.send("Incrorrect Username and/or Password")
      }
      response.end()
    } else {
      response.send("Please enter username and Password!")
      response.end()
    }
  })
}

module.exports = login
