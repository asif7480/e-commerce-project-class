import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import UserRoutes from "./Routes/UserRoutes"
import GuestRoutes from "./Routes/GuestRoutes"
import AdminRoutes from "./Routes/AdminRoutes"
import AdminDashboard from "./pages/admin/AdminDashboard"
import UserDashboard from "./pages/user/UserDashboard"
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route element={<GuestRoutes />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route element={<AdminRoutes />}>
            <Route path="/dashboard/admin" element={<AdminDashboard />} />
          </Route>

          <Route element={<UserRoutes />}>
            <Route path="/dashboard/user" element={<UserDashboard />} />
          </Route>


        </Routes>
      </Router>
    </>
  )
}

export default App
