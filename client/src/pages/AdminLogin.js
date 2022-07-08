import React, { useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap"
import "./AdminLogin.css"
import Axios from "axios"

function AdminLogin(props) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const response = await Axios.post("http://localhost:5000/login", { username, password })
      if (response.data) {
        console.log(response.data)
        props.setLoggedIn(true)
      }
      console.log(response.data)
    } catch (e) {
      console.log("There was a problem")
    }
  }

  return (
    <>
      <div className="topnav" id="myTopnav">
        <a className="active">Login</a>
      </div>
      <br />
      <div>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <br />
            <Form.Control type="text" placeholder="Enter username" onChange={e => setUsername(e.target.value)} />
            <br />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <br />
            <Form.Control type="password" placeholder="Password" maxLength="12" onChange={e => setPassword(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  )
}

export default AdminLogin
