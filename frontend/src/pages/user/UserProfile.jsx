import { useEffect, useState } from "react"
import Layout from "../../components/Layout"
import axios from "axios"
import { Link } from "react-router-dom"

const UserProfile = () => {
  const [userProfileInfo, setUserProfileInfo] = useState({})
  const token = localStorage.getItem("token")
  useEffect( () => {
    axios.get(`http://localhost:3001/api/auth/userProfile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then( (response) => {
        // console.log(response.data);
        setUserProfileInfo(response.data)
      })
      .catch( (error) => {
          console.log(error);
      })
  }, [])
  console.log(userProfileInfo);
  
  return (
    <Layout>
      <div className="container mt-5">
        <div className="row">
          <div className="col-3">
          <ul className="list-group">
            <li className="list-group-item active" aria-current="true">
              <Link className="text-white text-decoration-none" to="/dashboard/user">Go to Dashboard</Link>
            </li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>

          </div>
          <div className="col-6">
            <div className="border border-2 rounded p-3">
              <h2 className="text-center">Profile Info</h2>
              <p className="text-lead">Name: {userProfileInfo.name}</p>
              <p className="text-lead">Email: {userProfileInfo.email}</p>
              <p className="text-lead">Phone: {userProfileInfo.phone}</p>
              <p className="text-lead">Address: {userProfileInfo.address}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default UserProfile