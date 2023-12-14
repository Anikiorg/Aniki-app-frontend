import "./LoginPage.css";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import authService from "../../services/auth.service";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    // Send a request to the server using axios
    /* 
    axios.post(`${process.env.REACT_APP_API_URL}/auth/login`)
      .then((response) => {})
    */

    // Or using a service
    authService
      .login(requestBody)
      .then((response) => {
        // If the POST request is successful store the authentication token,
        // after the token is stored authenticate the user
        // and at last navigate to the home page
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="LoginPage center">
<div className="card w-96 bg-base-100 shadow-xl">
 <div className="card-body">
 <h2 className="card-title">Log in</h2>
      <form onSubmit={handleLoginSubmit} >
        <input type="email" name="email" value={email} onChange={handleEmail} placeholder="Type email" className="input input-bordered w-full max-w-xs"/>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
          placeholder="Type password"
          className="input input-bordered w-full max-w-xs"
        />
      
        <button className="btn" style={{marginTop: "15px"}} type="submit">Login</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      
      <span>Don't have an account yet?</span>
      <Link to={"/signup"} style={{color:"blue"}}> Sign Up</Link>
      
    </div>
    </div>
    </div>
  );
}

export default LoginPage;
