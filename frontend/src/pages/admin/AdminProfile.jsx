import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AdminProfile = () => {
    const [adminProfileInfo, setAdminProfileInfo] = useState({})
    const token = localStorage.getItem("token")
    useEffect( () => {
      axios.get(`http://localhost:3001/api/auth/adminProfile`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then( (response) => {
          // console.log(response.data);
          setAdminProfileInfo(response.data)
        })
        .catch( (error) => console.log(error) )
    }, [])
    console.log(adminProfileInfo);
    
    return (
      <Layout>
        <div className="container mt-5">
          <div className="row">
            <div className="col-3">
            <ul className="list-group">
              <li className="list-group-item active" aria-current="true">
                <Link className="text-white text-decoration-none" to="/dashboard/user">Go to Dashboard</Link>
              </li>
              <li className="list-group-item">A third item</li>
              <li className="list-group-item">A fourth item</li>
              <li className="list-group-item">And a fifth one</li>
            </ul>
  
            </div>
            <div className="col-6">
              <div className="border border-2 rounded p-3">
                <h2 className="text-center">Profile Info</h2>
                <p className="text-lead">Name: {adminProfileInfo.name}</p>
                <p className="text-lead">Email: {adminProfileInfo.email}</p>
                <p className="text-lead">Phone: {adminProfileInfo.phone}</p>
                <p className="text-lead">Address: {adminProfileInfo.address}</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
}

export default AdminProfile