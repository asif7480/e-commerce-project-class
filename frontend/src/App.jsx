import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/user/Dashboard"
import UserRoutes from "./Routes/UserRoutes"
import GuestRoutes from "./Routes/GuestRoutes"
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<UserRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route element={<GuestRoutes />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
