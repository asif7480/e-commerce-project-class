import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/AuthContext"


const AdminRoutes = () => {
  const {user} = useAuth()
  return (
    <>
        { (user.email && localStorage.getItem("role") === "admin") ? <Outlet /> : <Navigate to="/login"/>}
    </>
  )
}

export default AdminRoutes