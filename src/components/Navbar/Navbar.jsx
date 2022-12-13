import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { ThemeContext } from "../../context/theme.context"

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const ctx = useContext(ThemeContext);
  console.log(ctx)
  
  // console.log(user)

  return (
    <div className="row  align-items-center justify-content-center fondoNavbar">

          <nav className="navbar navbar-expand-md navbar-light col-12 m-0 p-2">
            
             
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
                                        <h6 onClick={logOutUser} className="dropdown-item text-navbar">Logout</h6>
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


        
   