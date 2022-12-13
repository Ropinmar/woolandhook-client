import "./SignupPage.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [aboutUser, setAboutUser] = useState("");
  const [profilePic, setProfilePic] = useState("")
  const [errorMessage, setErrorMessage] = useState(undefined);

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
    <div className="SignupPage">
      <h1>Sign Up</h1>

      {/* <form onSubmit={handleSignupSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <button type="submit">Sign Up</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link> */}



      <form className="col-12 g-4 justify-content-center align-items-center " onSubmit={handleSignupSubmit}>

                <div className="col-8 mb-3">
                    <label htmlFor="nameInput" className="form-label">Name:</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Write your name" 
                    id="nameInput"
                    name="name"
                    value={name}
                    onChange={handleName}></input>
                </div>

                <div className="col-8 mb-3">
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

                <div className="col-8 mb-3">
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

                <div className="col-8 mb-3">
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

                <div className="col-8 mb-3">
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

                <div className="col-8 mb-3">
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


                <div className="col-8 buttonForm">
                    <div className="mb-3 dateInput">
                        <label htmlFor="dateOfBirthInput" className="form-label">Date:</label>
                        <input 
                        className="form-control" 
                        type="date" 
                        name="dateOfBirth" 
                        id="dateOfBirthInput"
                        value={dateOfBirth}
                        onChange={handleDateOfBirth}></input>
                    </div>
                    

                    <div className=''>
                        <button className="btn btn-outline-ligth btn-md buttonStart mx-2 mt-3" type="submit">Sign up!</button>
                    </div>
                </div>

            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default SignupPage;