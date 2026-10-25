import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { useCompare } from "../context/CompareContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { compareList } = useCompare();

  return (
    <header className="navbar">
      <div className="container nav-inner">

        <Link to="/" className="logo">
          <FaHome /> Stay<span>Finder</span>
        </Link>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/find-pg">
            Find PG
          </NavLink>

          <NavLink to="/compare">
            Compare{" "}
            {compareList.length > 0 && (
              <b className="badge">{compareList.length}</b>
            )}
          </NavLink>

          <NavLink to="/about">About</NavLink>

          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="nav-actions">
          {user ? (
            <>
              <Link to="/dashboard" className="btn btn-outline">
                Hi, {user.name.split(" ")[0]}
              </Link>

              <button
                className="btn btn-primary"
                onClick={logout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline">
                Login
              </Link>

              <Link to="/register" className="btn btn-primary">
                Register
              </Link>
            </>
          )}
        </div>

      </div>
    </header>
  );
}