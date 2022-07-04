import React, { useState, useEffect } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import "./AddEdit.css"
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"

const initialState = {
  username: "",
  email: "",
  password: "",
  usergroup: ""
}

const AddEdit = () => {
  // const [state, setState] = useState(initialState)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [usergroup, setUserGroup] = useState("")

  // const { username, email, password, usergroup } = state

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    if (!username || !email || !password || !usergroup) {
      toast.error("Please provide value for each input field!", { autoClose: 2000 })
    } else {
      axios
        .post("http://localhost:5000/api/post", {
          username,
          email,
          password,
          usergroup
        })
        // .then(() => {
        //   setState({ username: "", email: "", password: "", usergroup: "" })
        // })
        .catch(err => toast.error(err.response.data))
      //navigate towards home page once the user is added Timeout set at 500ms delay
      setTimeout(() => navigate("/"), 500)
    }
  }

  // const handleInputChange = event => {
  //   const { username, value } = event.target
  //   setState({ ...state, [username]: value })
  // }

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center"
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="username">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name ..."
          value={username}
          onChange={event => {
            setUsername(event.target.value)
          }}
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email ..."
          value={email}
          onChange={event => {
            setEmail(event.target.value)
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          name="password"
          placeholder="Password ..."
          value={password}
          onChange={event => {
            setPassword(event.target.value)
          }}
        />
        <label htmlFor="usergroup">User Group</label>
        <input
          type="text"
          id="usergroup"
          name="usergroup"
          placeholder="User Group ..."
          value={usergroup}
          onChange={event => {
            setUserGroup(event.target.value)
          }}
        />
        <input type="submit" value="Save" />
        <Link to="/">
          <input type="button" value="Go Back" />
        </Link>
      </form>
    </div>
  )
}

export default AddEdit
