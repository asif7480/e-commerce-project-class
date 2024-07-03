import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user, setUser } = useAuth()
  const role = localStorage.getItem("role")
  const handleLogout = () => {
    setUser({ email: "", orders: []})
    localStorage.removeItem("email")
    localStorage.removeItem("token")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            Ecommerce App
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/categories"
                  className="nav-link"
                  aria-current="page"
                >
                  Categories
                </NavLink>
              </li>

              {
                user.email ? (
                  <>
                    <li className="nav-item">
                      <NavLink to={`/dashboard/${role === "user" ? "user" : "admin"}`} className="nav-link">
                        Dashboard
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink to={`/dashboard/${role === "user" ? "user" : "admin"}/profile`} className="nav-link">
                        Profile
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink to="/login" onClick={handleLogout} className="nav-link">
                        Logout
                      </NavLink>
                    </li>                  
                  </>
                ) : (
                  <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      Register
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>    
                  </>
                )
              }
              

              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  Cart (0)
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
