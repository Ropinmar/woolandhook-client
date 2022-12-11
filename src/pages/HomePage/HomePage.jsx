import "./HomePage.css";

function HomePage() {
  return (
    <div>
       <section className="hero align-items-stretch">
            <div className="hero-principal d-flex flex-row justify-content-center align-items-center">
                <img className="picHomePage img-fluid" src="./images/ovillos.jpg" alt="woolPic" />
                <img className="picHomePage2 img-fluid" src="./images/ovillos2.jpg" alt="woolPic" />
            </div>
            <div>
                <h1 className="text-button">Get a trip around the Wool and Hook world </h1>
                <button className="btn btn-outline-ligth btn-lg  buttonStart"><a href="/login" className="linkHome"><h4 className="text-button">Get started!</h4></a></button>
            </div>
            <div className="hero-principal d-flex flex-row justify-content-center align-items-center">
                <img className="picHomePage2 img-fluid" src="./images/ovillos3.jpg" alt="woolPic" />
                <img className="picHomePage img-fluid" src="./images/ovillos4.jpg" alt="woolPic" />
            </div>
            
        </section>
    </div>
  );
}

export default HomePage;
