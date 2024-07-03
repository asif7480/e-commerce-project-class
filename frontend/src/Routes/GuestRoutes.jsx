import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const GuestRoutes = () => {
    
    const {user} = useAuth()
    const role = localStorage.getItem("role")
    return (
        <>
            {/* { !user.email ? <Outlet /> : <Navigate to="/dashboard"/>} */}
            { !user.email ? <Outlet /> : <Navigate to={`/dashboard/${role === "user" ? "user" : "admin"}`} />}
        </>
    )
}

export default GuestRoutes