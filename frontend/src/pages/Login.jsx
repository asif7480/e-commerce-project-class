import { useState } from "react"
import Layout from "../components/Layout"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useAuth } from "../context/AuthContext"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { setUser } = useAuth()

  const navigate = useNavigate("/")

  const handleLogin = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:3001/api/auth/login`, { email, password })
      .then( (response) => {
        // console.log(response.data);
        localStorage.setItem("email", response.data.email)
        localStorage.setItem("role", response.data.role)
        localStorage.setItem("token", response.data.token)
        alert("login successfully")
        setUser({ email, orders: [] })
        // navigate(`/dashboard/${user.role === "user" ? "user" : "admin"}`)
        if(localStorage.getItem("role") === "admin"){
          navigate(`/dashboard/admin`)
        }else{
          navigate(`/dashboard/user`)
        }
      })
      .catch( (err) => {
        console.log(err);
        alert("Error in login")
      })
  }
  return (
    <Layout>
      <div className="container col-4 mt-5">
        <h2 className="text-center">Login Form</h2>
        <form onSubmit={handleLogin}>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default Login
