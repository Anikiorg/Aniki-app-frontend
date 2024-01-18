import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleLogOut = () => {
    logOutUser()
    navigate("/")

  }

  return (
    <div className="nav">
      <Link to="/" className="home-logo hover:text-orange-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
        <a>Aniki</a>
      </Link>

      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn-ghost btn-circle avatar dropdown-icon">
          <svg
            xmlns="http://www.w3.org/1000/svg"
            width="30"
            height="30"
            viewBox="0 -3 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            className="hover:text-orange-800"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="mt-1 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-40 text-black"
        >
          {isLoggedIn ? (
            <>
              <li>
                  <Link to="/profile">
                    <button>Profile</button>
                  </Link>
              </li>
              <li>
                  <button onClick={handleLogOut}>Logout</button>
            
              </li>
            </>
          ) : (
            <>
              <li>
                
                  <Link to="/login">
                    <button>Login</button>
                  </Link>
                
              </li>
              <li>
                
                  <Link to="/signup">
                    <button>Sign Up</button>
                  </Link>
                
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
