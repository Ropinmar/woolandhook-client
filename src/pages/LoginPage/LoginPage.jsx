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
    axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`)
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
    <div className="loginPage container">
      <h1 className="text-button">Login</h1>

      {/* <form onSubmit={handleLoginSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <button type="submit">Login</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Don't have an account yet?</p>
      <Link to={"/signup"}> Sign Up</Link> */}


      <div className="container">
        <div className="row justify-content-center align-items-center">
        <div className="col-6 ">
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address:</label>
              <input type="email"  name="email" value={email} onChange={handleEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input 
              type="password" 
              name="password"
              value={password}
              onChange={handlePassword}class="form-control" id="exampleInputPassword1" />
            </div>

            {/* <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div> */}
            <button type="submit" className="btn btn-outline-ligth buttonStart">Submit</button>
          </form>
          </div>
          
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="container login-footer">
            <p>Don't have an account yet?</p>
            <Link to={"/signup"}> <button className="btn btn-outline-ligth buttonStart">Sign Up</button></Link>
          </div>
          
        </div>
      </div>
    </div>
    
    
  );
}

export default LoginPage;