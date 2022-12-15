import "./SignupPage.css";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
import { ThemeContext } from "../../context/theme.context";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [aboutUser, setAboutUser] = useState("");
  const [profilePic, setProfilePic] = useState("")
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleDateOfBirth = (e) => setDateOfBirth(e.target.value);
  const handleAboutUSer = (e) => setAboutUser(e.target.value);
  const handleProfilePic = (e) => setProfilePic(e.target.value);
  

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name, lastName,dateOfBirth, aboutUser, profilePic };

    // Send a request to the server using axios
    /* 
    const authToken = localStorage.getItem("authToken");
    axios.post(
      `${process.env.REACT_APP_SERVER_URL}/auth/signup`, 
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
        navigate("/profile");
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="container-fluid px-5 probando">
    <div className={"container-fluid row colorFondo2 d-flex justify-content-center align-items-center " + theme}>

      <div className="col-6 fondoSignup d-flex justify-content-center align-items-center p-3 px-4 m-3 rounded">
      <form className="row justify-content-center light p-4" onSubmit={handleSignupSubmit}>
                    
                <div className="col-12 mb-1">
                    <h1>Sign Up</h1>
                </div>
                <div className="col-5 mb-1">
                    <label htmlFor="nameInput" className="form-label col-3">Name:</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Write your name" 
                    id="nameInput"
                    name="name"
                    value={name}
                    onChange={handleName}></input>
                </div>

                <div className="col-5 mb-1">
                    <label htmlFor="lastnameInput" className="form-label">Lastname:</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="write your lastname" 
                    id="lastnameInput"
                    name="lastName"
                    value={lastName}
                    onChange={handleLastName}></input>
                </div>

                <div className="col-5 mb-1">
                    <label htmlFor="emailInput" className="form-label">Email:</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Your email" 
                    id="emailInput"
                    name="email"
                    value={email}
                    onChange={handleEmail}></input>
                </div>

                <div className="col-5 mb-1">
                    <label htmlFor="passwordInput" className="form-label">Password:</label>
                    <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Password" 
                    id="passwordInput"
                    name="password"
                    value={password}
                    onChange={handlePassword}></input>
                </div>

                <div className="col-5 mb-1">
                    <label htmlFor="picInput" className="form-label">Image</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Pic profile" 
                    id="picInput"
                    name="profilePic"
                    value={profilePic}
                    onChange={handleProfilePic}></input>
                    
                </div>

                <div className="col-5 mb-1">
                    <label htmlFor="aboutInput" className="form-label">About you:</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Something about you" 
                    id="aboutInput"
                    name="aboutUser"
                    value={aboutUser}
                    onChange={handleAboutUSer}></input>
                </div>


                <div className="col-5 buttonForm">
                    <div className="mb-1 dateInput">
                        <label htmlFor="dateOfBirthInput" className="form-label">Date:</label>
                        <input 
                        className="form-control" 
                        type="date" 
                        name="dateOfBirth" 
                        id="dateOfBirthInput"
                        value={dateOfBirth}
                        onChange={handleDateOfBirth}></input>
                    </div>
                    

                    <div className='col-8'>
                        <button className="btn btn-outline-ligth mx-2 mt-3 buttonSign" type="submit">Done!</button>
                    </div>
                </div>

            </form>
            
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
            <br></br>
            <div className="col-8 m-5 btn borde">
              <Link to="/login"><button className="btn btn-light borde buttonSign">If you have an account click here!</button></Link>
            </div>
    </div>
    </div>
  );
}

export default SignupPage;