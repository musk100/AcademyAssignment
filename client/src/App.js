import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./App.css"
import AddEdit from "./pages/AddUser.js"
import Home from "./pages/Home"
import AdminLogin from "./pages/AdminLogin"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-center" />
        <Routes>
          <Route exact path="/mainMenu" element={<Home />} />
          <Route path="/" element={<AdminLogin />} />
          <Route path="/addUser" element={<AddEdit />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
