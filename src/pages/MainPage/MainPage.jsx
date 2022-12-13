import React from 'react'
import "./MainPage.css"
import { Link } from "react-router-dom";
const MainPage = () => {
  return (
    <div className="container-fluid pt-5 ">

      <div className="container col w-75 bordeShadow">
            <div id="carouselExampleCaptions" className="carousel slide w-100 d-flex justify-content-center align-items-center" data-bs-ride="false">

              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>

              <div className="carousel-inner h-100 w-100">

                <div className="carousel-item active">
                  <img src="https://swall.teahub.io/photos/small/361-3611480_crochet-hands-with-yarn-knitting-needle-lane.jpg" className="d-block w-100 " alt="..."/>
                  <div className="carousel-caption d-none d-md-block textSlide col-8 justify-content-center align-items-center">
                    <h1>Crochet</h1>
                    <p>The crochet technique is used to create items with a single hook needle.</p>
                  </div>
                </div>

                <div className="carousel-item active">
                  <img src="https://media.istockphoto.com/id/687350106/es/foto/guayu-hecho-a-mano-bolsas-de-mano-colombianas.jpg?s=612x612&w=0&k=20&c=LYjhTcy7PJJqk4QQ1-OtJAp0MLKufrptVYQWKU2jA9c=" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block textSlide col-8 justify-content-center align-items-center">
                    <h1>Macrame</h1>
                    <p>The macrame technique allows to get tighter knots, which are widely used by indigenous people.
                      Very interesting the result.</p>
                  </div>
                </div>

                <div className="carousel-item active">
                  <img src="https://merceriaelhilorojo.com/wp-content/uploads/2021/11/20190604_104053851_iOS-2.jpg" className="d-block w-100" alt="..."/>
                  <div className="carousel-caption d-none d-md-block textSlide  col-8 justify-content-center align-items-center">
                    <h1>Knitting</h1>
                    <p>knitting with two hooks, allows you to use looser and more flexible knots</p>
                  </div>
                </div>

              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>

              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>

            </div>
      </div>
          <br></br>
        <div className="row d-flex justify-content-around align-items-center mt-5">
          <div className="col-5 ">
            <div className="card mb-3 border-0 bordeShadow">
                <div className="row g-0">
                  <div className="col-md-6">
                    <img src="https://images.unsplash.com/photo-1562469162-c17fc5155156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="img-thumbnail rounded-start" alt="eventPic" />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">Your project name</h5>
                      <p className="card-text">Description</p>
                      <p className="card-text">Materials</p>
                      <p className="card-text"><small className="text-muted">Date</small></p>
                      <p>Where</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Link to="/new-event">
                  <button className="btn border border-dark">Program an event</button>
                </Link>
              </div>
          </div>
          
      
            <div className="card text-start col-4 ">
                  <div className="text-center"></div>
                  <img src="https://images.unsplash.com/photo-1562469162-c17fc5155156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="card-header picForCard" alt="postPic"/>
                  
                  
                  <div className="card-body">
                    
                    <h2 className="card-title">Post title</h2>
                    <h4>Owner</h4>
                    <h4>Wovencraft</h4>
                    
                    <p className="card-text">Something about your post</p>

                    <div className="d-flex justify-content-between">

                      <h6 className="card-link">Comments</h6>

                      <div>
                        
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                          </svg>
                        

                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-trash" viewBox="0 0 16 16" >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                          <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>

                      </div>

                      {/* <Link to="/new-comment"></Link> */}
                        <h6 className="card-link" ><a href="/new-post">New Comment</a></h6>
                        
                    </div>

                  </div>
          </div>
          </div>
    </div>
  )
}

export default MainPage;