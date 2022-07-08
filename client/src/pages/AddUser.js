import React, { useState, useEffect } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import "./AddUser.module.css"
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"

const initialState = {
  name: "",
  email: "",
  password: "",
  usergroup: ""
}

const AddEdit = () => {
  const [state, setState] = useState(initialState)

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [usergroup, setUserGroup] = useState("")

  const navigate = useNavigate()

  const { id } = useParams()

  const handleSubmit = e => {
    e.preventDefault()
    if (!username || !email || !password || !usergroup) {
      toast.error("Please provide value for each input field!", { autoClose: 2000 })
    } else {
      if (!id) {
        axios
          .post("http://localhost:5000/api/post", {
            username,
            email,
            password,
            usergroup
          })
          .then(() => {
            setState({ username: "", email: "", password: "", usergroup: "" })
          })
          .catch(err => toast.error(err.response.data))
      }

      setTimeout(() => navigate("/mainmenu"), 500)
    }
  }

  // const handleInputChange = event => {
  //   const { username, value } = event.target
  //   setState({ ...state, [username]: value })
  // }

  return (
    <div style={{ marginTop: "100px" }}>
      <h2>Create User</h2>
      <form
        autoComplete="off"
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
          value={username || ""}
          maxLength="12"
          onChange={event => {
            setUsername(event.target.value)
          }}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email ..."
          value={email || ""}
          onChange={event => {
            setEmail(event.target.value)
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password ..."
          value={password || ""}
          maxLength="12"
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
          value={usergroup || ""}
          onChange={event => {
            setUserGroup(event.target.value)
          }}
        />
        <input type="submit" value={id ? "Update" : "Save"} />
        <Link to="/mainMenu">
          <input type="button" value="Go Back" />
        </Link>
      </form>
    </div>
  )
}

export default AddEdit
