const Users = require("../models/UserModel")
const connection = require("../config/Database")
const jwt = require("jsonwebtoken")
const { request, response } = require("express")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const bodyParser = require("body-parser")
const express = require("express")
const app = express()

app.use(cookieParser())

app.use(bodyParser.urlencoded({ extended: true }))
// app.use(
//   session({
//     key: "userId",
//     secret: "subscribe",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       expires: 60 * 60 * 24
//     }
//   })
//)
//hasshing password
const bcrypt = require("bcrypt")
const saltRound = 10

const login = function (app) {
  //   app.get("/login", (request, response) => {
  //     if (request.session.user) {
  //       response.send({ loggedIn: true, user: request.session.user })
  //     } else {
  //       response.send({ loggedIn: false })
  //     }
  //   })
  // app.post("/login", (request, response) => {
  //   const username = request.body.username
  //   const password = request.body.password
  //   const selectQuery = "SELECT * FROM taskmanagement_db WHERE username = '?'"
  //   connection.query(selectQuery, [username, password], (error, result) => {
  //     if (error) {
  //       response.send({ error: error })
  //     }
  //     if (result.length > 0) {
  //       if (password == results[0].password) {
  //         console.log(username)
  //         response.json({
  //           loggedIn: false,
  //           message: "Wrong username/password combination!"
  //         })
  //       }
  //     } else {
  //       console.log("user dont exist")
  //       response.json({
  //         loggedIn: false,
  //         message: "User doesn't exist"
  //       })
  //     }
  //   })
  //})
}

module.exports = login
