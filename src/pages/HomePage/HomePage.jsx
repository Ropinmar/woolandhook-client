import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";
import "./HomePage.css";
import { Link } from "react-router-dom"

function HomePage() {
  //for change the background
  const { theme } = useContext(ThemeContext);
  return (
    <div className="container-fluid px-5 probando m-0 p-0">
      <div className={"container-fluid row d-flex justify-content-center align-items-center m-0 p-2 bordePic " + theme}>
        <div className="col-7 container flex-column bordeShadow justify-content-center align-items-center p-4 px-3 backgroundCover rounded m-3">
          
              <div className={"row h-100 m-0 p-1 fondoText rounded " + theme}>
                  
                <div className="col-6 p-1 m-0">
                    <img className="picHomePage picHomeSize p-0 m-0" src="./images/ovillos.jpg" alt="woolPic" />
                </div>

                <div className="col-6 p-1 m-0">
                    <img className="picHomePage2 picHomeSize p-0 m-0" src="./images/ovillos2.jpg" alt="woolPic" />
                </div>

                <br></br>
                <div className="d-flex justify-content-center align-items-center m-0 ms-4">
                  <div className="col-5 bordeShadow rounded backgroundCover">
                      <h4 className="text-next-button">Let´s travel around the Wool and Hook world </h4>
                  </div>
                <br></br>
                  <div className="col-1 p-0 m-0">
                    <button className="btn buttonStart"><Link to="/login" className="linkHome"><h6 className="text-button">Get started!</h6></Link></button>
                  </div> 
                </div>

                <div className="col-6 p-1 m-0">
                    <img className="picHomePage3 picHomeSize img-fluid p-0 m-0" src="./images/ovillos3.jpg" alt="woolPic" />
                </div>

                <div className="col-6 p-1 m-0">
                    <img className="picHomePage4 picHomeSize img-fluid p-0 m-0" src="./images/ovillos4.jpg" alt="woolPic" />
                </div>
                
                
              </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
