import { Link } from "react-router-dom";
import "./ProfilePage.css";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function ProfilePage() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  return (
    <div className="container-fluid p-0 fondoProfile">
      
      <div className="row">
          <div className="col-6 p-5">
            <img src={user.profilePic} alt="profilePic" className="w-75 bordeShadow"></img>
          </div>
          <div className="col-5  d-flex justify-content-around align-items-center ">
              <div className="container">
                <div className="col  m-4 bordeShadow fondo-color p-2 pb-1 rounded">
                  <div className="fondoProfile m-0 rounded">
                  <h1>{user.name}</h1>
                  <h1>{user.lastName}</h1>
                  <h4>{user.dateOfBirth}</h4>
                  </div>
                </div>
              
                <div className="col m-4 bordeShadow fondo-color p-2 rounded">
                  <div className="rounded fondoProfile pb-1">
                    <p>{user.aboutUser}
                    </p>
                  </div>
                </div>
              </div>
            </div>
      </div>
      <br></br>
      <div className="row d-flex justify-content-around align-items-center">
          <div className="col-8  fondo-color p-2 pb-0 m-2">
            <div className="card mb-3 border-0 bordeShadow fondoProfile">
                <div className="row g-0">
                  <div className="col-md-5">
                    <img src="https://images.unsplash.com/photo-1562469162-c17fc5155156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="img-thumbnail rounded-start" alt="eventPic" />
                    <div>
                      <Link to="/new-event">
                        <button className="btn btn-outline-black">Program an event</button>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title">Title</h5>
                      <p className="card-text">Description</p>
                      <p className="card-text">Materials</p>
                      <p className="card-text"><small className="text-muted">Date</small></p>
                      <p>Where</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          
      </div>
      
    </div>
  );
}

export default ProfilePage;
