import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const GuestRoutes = () => {
    
    const {user} = useAuth()
    return (
        <>
            { !user.email ? <Outlet /> : <Navigate to="/dashboard"/>}
        </>
    )
}

export default GuestRoutes