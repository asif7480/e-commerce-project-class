import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/AuthContext"


const UserRoutes = () => {
  const {user} = useAuth()
  return (
    <>
        { (user.email && localStorage.getItem("role") === "user") ? <Outlet /> : <Navigate to="/login"/>}
    </>
  )
}

export default UserRoutes