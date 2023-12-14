import "./SignupPage.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleUserName = (e) => setUserName(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, userName };

    // Send a request to the server using axios
    /* 
    const authToken = localStorage.getItem("authToken");
    axios.post(
      `${process.env.REACT_APP_API_URL}/auth/signup`, 
      requestBody, 
      { headers: { Authorization: `Bearer ${authToken}` },
    })
    .then((response) => {})
    */

    // Or using a service
    authService
      .signup(requestBody)
      .then((response) => {
        // If the POST request is successful redirect to the login page
        navigate("/login");
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        console.log(error)
      });
  };



  return (
    <div className="center">

    <div className="card w-96 bg-base-100 shadow-xl">
 <div className="card-body">
 <h2 className="card-title">Sign up</h2>
      <form onSubmit={handleSignupSubmit}>
<input type="email" name="email" value={email} onChange={handleEmail} placeholder="Type email" className="input input-bordered w-full max-w-xs" />
<br/>

        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
          placeholder="Type password"
          className="input input-bordered w-full max-w-xs"
          />

          <br/>
        <input type="text" name="name" value={userName} onChange={handleUserName} placeholder="Type username" className="input input-bordered w-full max-w-xs"/>

          <br/>
          <div className="card-actions justify-end">
        <button className="btn" style={{marginTop: "15px"}} type="submit">Sign Up</button>
        </div>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have account?</p>
      <Link to={"/login"} style={{color:"blue"}}> Login</Link>
          </div>
          </div>
    </div>
  );
}

export default SignupPage;
