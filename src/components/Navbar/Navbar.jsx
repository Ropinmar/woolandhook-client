import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    // <nav className="navbar navbar-expand-lg bg-light">
    //     <div className="container-fluid">
    //       <Link to="/">
    //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse">Home</button>
    //       </Link>

    //       {isLoggedIn && (
    //         <>
    //           <button onClick={logOutUser}>Logout</button>

    //           <Link to="/profile">
    //             <button>Profile</button>
    //             {/* <img src="https://picsum.photos/id/402/200/300" style={{ width: 50, height: 50, borderRadius: 25}} alt="profile" /> */}
    //           </Link>

    //           <span>{user && user.name}</span>
    //         </>
    //       )}

    //       {!isLoggedIn && (
    //         <>
    //           <Link to="/signup">
    //             {" "}
    //             <button>Sign Up</button>{" "}
    //           </Link>
    //           <Link to="/login">
    //             {" "}
    //             <button>Login</button>{" "}
    //           </Link>
    //         </>
    //       )}
    //     </div>
          
    // </nav>
      
      <nav className="navbar navbar-expand-md navbar-light bg-color">
          <div className="container-fluid d-flex">
            <h3 className="project-name">Wool and Hook</h3>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse move-rigth" id="navbarNav">
              <a className="navbar-brand" href="/">
                  <img src="/images/main-icono.webp" width="50" alt="logo" className="iconoPage"/>
              </a>
              <ul className="navbar-nav d-flex justify-content-center align-items-center">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/main"><h5 className="text-navbar">Home</h5></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/posts"><h5 className="text-navbar">Posts</h5></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/signup"><h5 className="text-navbar">Sign up</h5></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/login"><h5 className="text-navbar">Login</h5></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/new-post"><h5 className="text-navbar">New Post</h5></a>
                </li>
                
              </ul>
              <button onClick={logOutUser}>Logout</button>
          {isLoggedIn && (
             <>
               

               <Link to="/profile">
                 <button>Profile</button>
                 {/* <img src="https://picsum.photos/id/402/200/300" style={{ width: 50, height: 50, borderRadius: 25}} alt="profile" /> */}
               </Link>

               <span>{user && user.name}</span>
             </>
          )}
            </div>
          </div>
        </nav>
        
   
    
  );
}

export default Navbar;
