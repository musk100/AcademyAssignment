import React, { useEffect, useState } from "react"
import Axios from "axios"

function HeaderLoggedOut() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
  }
}
