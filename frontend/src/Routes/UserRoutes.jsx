import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import Dashboard from "../pages/user/Dashboard"


const UserRoutes = () => {
  const {user} = useAuth()
  return (
    <>
        { user.email ? <Outlet /> : <Navigate to="/login"/>}
    </>
  )
}

export default UserRoutes