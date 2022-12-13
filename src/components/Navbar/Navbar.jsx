import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  
  // console.log(user)

  return (
    <div className="row  align-items-center justify-content-center">

          <nav className="navbar navbar-expand-md navbar-light  col-10">
            
             
              <div className="collapse navbar-collapse align-items-center justify-content-center container d-flex" id="navbarNav">
                  <div className="col-3 d-flex align-items-center justify-content-center ">
                    <p className="project-name">Wool and <br></br>Hook</p>
                    <a className="navbar-brand" href="/">
                          <img src="/images/main-icono.webp" width="30" alt="logo" />
                    </a>
                  </div>
                  <div className="col-4 d-flex align-items-center justify-content-center ">     
                  <ul className="navbar-nav d-flex justify-content-center align-items-center">
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/main"><h5 className="text-navbar">Home</h5></a>
                      </li>
                  {!isLoggedIn && (   
                    <>
                      <li className="nav-item">
                        <a className="nav-link active" href="/signup"><h5 className="text-navbar">Sign up</h5></a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link active" href="/login"><h5 className="text-navbar">Login</h5></a>
                      </li>
                      </>
                    )}   
                  </ul>
                  </div> 

                  {isLoggedIn && (
                    <>
                        <div className="col-4 d-flex  align-items-center justify-content-center">
                          
                          <span className="nav-item">
                              <img src={user.profilePic} style={{ width: 50, height: 50, borderRadius: 25}} alt="profile" />
                            </span>
                          
                          <span className="nav-item">{user.name}</span>
                        
                          <li className="dropdown-item">
                            <hr className="dropdown-divider"/>
                          </li>
                          <span className="dropdown nav-item">
                        
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Navigate
                            </a>
                            
                            <ul className="dropdown-menu">
                                    
                                    <li>
                                      <a className="text-navbar dropdown-item" href="/profile">Profile</a>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider"/>
                                    </li>
                                    <li>
                                      <a className="dropdown-item text-navbar" href="/new-post">New Post</a>
                                    </li>
                                    <li>
                                      <hr className="dropdown-divider"/>
                                    </li>
                                    <li>
                                    <a className="dropdown-item text-navbar" href="/posts">Posts</a>
                                    </li>

                                    <li>
                                      <hr className="dropdown-divider"/>
                                    </li>
                                    
                                    <li>
                                      <a className="text-navbar dropdown-item" href="/new-event">New Event</a>
                                    </li>
                                    
                                    <li>
                                      <hr className="dropdown-divider"/>
                                    </li>
                                    
                                    <li>
                                      <a className="text-navbar dropdown-item" href="/events">Events</a>
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


        
   