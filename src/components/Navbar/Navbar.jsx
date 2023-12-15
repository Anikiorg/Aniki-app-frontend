import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";



function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
<div className="navbar text-5xl px-32 bg-base-100 shadow-xl">
  <div className="flex-none">
  </div>
  <div className="flex-1">
<Link to="/" className="flex gap-2 hover:text-orange-600">
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  <a className=""> Aniki</a>
</Link>


  </div>
  <div className="flex-none gap-2">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-34 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user hover:text-orange-600"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-black">
        {isLoggedIn
        ? (
          <>
          <li><a><Link to="/profile"><button className="">Profile</button></Link></a></li>
          <li><a><button className="" onClick={logOutUser}>Logout</button>{" "}</a></li>
          </>
        )
        : (
          <>
        <li><a><Link to="/login">{" "}<button className="">Login</button>{" "}</Link></a></li>
        <li><a><Link to="/signup">{" "}<button className="">Sign Up</button>{" "}</Link></a></li>
          </>
        )}

      </ul>
    </div>
  </div>
</div>

  
  );
}

export default Navbar;