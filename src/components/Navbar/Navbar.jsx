import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">
        <button className="btn">Home</button>
      </Link>

      {isLoggedIn && (
        <>
          <button className="btn" onClick={logOutUser}>Logout</button>

          <Link to="/profile">
            <button className="btn">Profile</button>
            {/* <img src="https://picsum.photos/id/402/200/300" style={{ width: 50, height: 50, borderRadius: 25}} alt="profile" /> */}
          </Link>

          <span>{user && user.name}</span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            {" "}
            <button className="btn">Sign Up</button>{" "}
          </Link>
          <Link to="/login">
            {" "}
            <button className="btn">Login</button>{" "}
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
