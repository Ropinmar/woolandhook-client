import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { ThemeContext } from "../../context/theme.context"

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  
  // console.log(user)

  return (
    <div className={"col align-items-center justify-content-center fondoNavbar "}>

          <nav className="navbar navbar-expand-md navbar-light col-12 m-0 p-2 ">
            
             
              <div className="collapse navbar-collapse container p-0" id="navbarNav">
                  <div className="col-3 d-flex align-items-center justify-content-center">
                    <p className="project-name">Wool and <br></br>Hook</p>
                    <NavLink className="navbar-brand" to="/">
                          <img src="/images/main-icono.webp" width="30" alt="logo" />
                    </NavLink>
                  </div>
                  <div className="col-4 d-flex align-items-center justify-content-center ">     
                  <ul className="navbar-nav d-flex justify-content-center align-items-center">
                      <li className="nav-item">
                        <NavLink className="nav-link active " aria-current="page" to="/main"><h5 className="text-navbar">Home</h5></NavLink>
                      </li>
                  {!isLoggedIn && (   
                    <>
                      <li className="nav-item">
                        <NavLink className="nav-link active" to="/signup"><h5 className="text-navbar">Sign up</h5></NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink className="nav-link active" to="/login"><h5 className="text-navbar">Login</h5></NavLink>
                      </li>
                      </>
                    )}   
                  </ul>
                  </div> 

                  {isLoggedIn && (
                    <>
                        <div className="col-4 d-flex  align-items-center justify-content-center">
                          
                          <span className="nav-item">
                              <img src={user.profilePic} style={{ width: 50, height: 50, borderRadius: 25}} alt="profile" className="borderPic" />
                            </span>
                          <br></br>
                          <NavLink to="/profile" className="nameUser">
                          <span className="nav-item mx-3 nameUser">{user.name[0].toUpperCase() + user.name.substring(1)}</span>
                          </NavLink>
                          <li className="dropdown-item">
                            <hr className="dropdown-divider"/>
                          </li>
                          <span className="dropdown nav-item">
                        
                            <NavLink className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Navigate
                            </NavLink>
                            
                            <ul className="dropdown-menu">
                                    
                                    <li>
                                      <Link className="text-navbar dropdown-item" to="/profile">Profile</Link>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider"/>
                                    </li>
                                    <li>
                                      <Link className="dropdown-item text-navbar" to="/new-post">New Post</Link>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider"/>
                                    </li>
                                    <li>
                                    <Link className="dropdown-item text-navbar" to="/posts">Posts</Link>
                                    </li>

                                    <li>
                                      <hr className="dropdown-divider"/>
                                    </li>
                                    
                                    <li>
                                      <Link className="text-navbar dropdown-item" to="/new-event">New Event</Link>
                                    </li>
                                    
                                    <li>
                                      <hr className="dropdown-divider"/>
                                    </li>
                                    
                                    <li>
                                      <Link className="text-navbar dropdown-item" to="/events">Events</Link>
                                    </li>

                                    <li>
                                      <hr className="dropdown-divider"/>
                                    </li>
                                    <li>
                                        <Link onClick={logOutUser} className="dropdown-item text-navbar" to="/">Logout</Link>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider"/>
                                    </li>
                                    <li className="d-flex justify-content-center align-items-center">
                                    <button className="btn btn-light col-10" onClick={toggleTheme}>
                                      {
                                        theme === "light" ?( 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-brightness-high" viewBox="0 0 16 16">
                                            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                                        </svg> ): (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16">
                                            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
                                          </svg>)
                                      }
                                    </button>
                                    
                                    
                                    </li>
                              </ul>
                          </span>
                        </div>
                    </>
                  )}
              </div>
              

           
          </nav>
    </div>    
  );
}

export default Navbar;


        
   