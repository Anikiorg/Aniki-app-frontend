import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";



function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
<div className="navbar bg-base-100 shadow-xl">
  <div className="flex-none">
  </div>
  <div className="flex-1">
<Link to="/">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
</Link>


    <a className="text-xl"> Aniki</a>
  </div>
  <div className="flex-none gap-2">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-34 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li><a className="justify-between">{isLoggedIn && (<Link to="/profile"><button className="btn">Profile</button></Link>)}</a></li>
        <li><a>{isLoggedIn && (<button className="btn" onClick={logOutUser}>Logout</button>)}</a></li>
        <li><a>{!isLoggedIn && ( <Link to="/signup">{" "}<button className="btn">Sign Up</button>{" "}</Link>)}</a></li>
        <li><a>{!isLoggedIn && ( <Link to="/login">{" "}<button className="btn">Login</button>{" "}</Link>)}</a></li>
      </ul>
    </div>
  </div>
</div>

  
  );
}

export default Navbar;