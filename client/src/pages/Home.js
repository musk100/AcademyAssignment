import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Home.css"
import { toast } from "react-toastify"
import axios from "axios"

const Home = () => {
  const [data, setData] = useState([])

  //fetch all data from API
  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get")
    setData(response.data)
  }

  //on initial load, fetch all data from backend
  useEffect(() => {
    loadData()
  }, [])

  const deleteContact = id => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      axios.delete(`http://localhost:5000/api/remove/${id}`)
      toast.success("Contact Deleted Successfully")
      setTimeout(() => loadData(), 500)
    }
  }
  return (
    <div style={{ marginTop: "150px" }}>
      <h2>Administrator Menu</h2>
      <Link to="/addUser">
        <button className="btn btn-password">Add User</button>
      </Link>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Username</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Password</th>
            <th style={{ textAlign: "center" }}>User Group</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>{item.usergroup}</td>
                <td>
                  <Link to={`/update/${item.id}`}>
                    <button className="btn btn-edit">Edit</button>
                  </Link>
                  <button className="btn btn-delete" onClick={() => deleteContact(item.id)}>
                    Delete
                  </button>
                  <Link to={`/view/${item.id}`}>
                    <button className="btn btn-view">View</button>
                  </Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Home
