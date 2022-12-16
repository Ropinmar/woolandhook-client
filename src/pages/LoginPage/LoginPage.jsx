import "./LoginPage.css";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import authService from "../../services/auth.service";
import { ThemeContext } from "../../context/theme.context";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
//using the theme for dark
  const { theme } = useContext(ThemeContext);

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
        navigate("/main");
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="container-fluid px-5 probando">
      <div className={"col-12 container-fluid p-4 d-flex justify-content-center align-items-center " + theme}>

        <div className="borderLogin rounded col-6 m-5">
          <div className="col light m-3 p-1">
          
            <div className="col-10 loginColor2 ms-5 rounded">
              <form onSubmit={handleLoginSubmit} className="m-3">
                <h1 className="text-button">Login</h1>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address:</label>
                  <input type="email"  name="email" value={email} onChange={handleEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input 
                  type="password" 
                  name="password"
                  value={password}
                  onChange={handlePassword}className="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" className="btn btn-outline-ligth buttonSign m-3">Enter</button>
              </form>
            </div>
            
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="container-fluid login-footer col-7">
              <p>Don't have an account yet?</p>
              <Link to={"/signup"}> <button className="btn btn-outline-light btn-md mb-2 buttonSign">Sign Up</button></Link>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
}

export default LoginPage;