import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
import "./View.css"

const View = () => {
  const [user, setUser] = useState({})

  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:5000/api/get/${id}`).then(response => setUser({ ...response.data[0] }))
  }, [id])
  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>User Contact Detail</p>
        </div>
        <div className="container">
          <strong>ID:</strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>Username:</strong>
          <span>{user.username}</span>
          <br />
          <br />
          <strong>Email:</strong>
          <span>{user.email}</span>
          <br />
          <br />
          <strong>Password:</strong>
          <span>{user.password}</span>
          <br />
          <br />
          <strong>UserGroup:</strong>
          <span>{user.usergroup}</span>
          <br />
          <br />
          <Link to="/mainmenu">
            <div className="btn btn-edit">Go Back</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default View
