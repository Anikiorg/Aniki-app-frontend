import "../styles/components/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

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
<div className="navbar bg-base-100">
  <div className="flex-1 home-logo">
    <a href="/" className="btn btn-ghost text-xl">        
    <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>ANIKI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li>
        <details>
          <summary>
          <svg
            xmlns="http://www.w3.org/1000/svg"
            width="50"
            height="30"
            viewBox="0 -3 24 24"
            fill="none"
            stroke="black"
            strokeWidth="1.5"
            className="hover:text-orange-800"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>

          </summary>
                
          {isLoggedIn ? (
          <ul className="p-2 bg-base-100 rounded-t-none">              <li>
                  <Link to="/profile">
                  Profile
                  </Link>
              </li>
              <li>
                  <button onClick={handleLogOut}>Logout</button>
            
              </li>
            </ul>
          ) : (
           <ul className="p-2 bg-base-100 rounded-t-none">              <li>
                
                  <Link to="/login">
                   Login
                  </Link>
                
              </li>
              <li>
                
                  <Link to="/signup">
                    Sign Up
                  </Link>
                
              </li>
            </ul>
          )}

        </details>
      </li>
    </ul>
  </div>
</div>
  );
}

export default Navbar;
