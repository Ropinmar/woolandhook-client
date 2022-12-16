import React, { useContext} from 'react'
import "./MainPage.css"
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/theme.context";
const MainPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="container-fluid px-5 probando">
      <div className={"container-fluid p-5 fondoMainpage " + theme}>

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
        <div className="row d-flex justify-content-around align-items-center m-5">
              <div className="col-10">
                  
                    <div className="event col-6 ps-0 d-flex justify-content-center align-items-center">

                        <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXByZW5kaWVuZG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="pic-books" className=""/>
                        
                        <div className="overlay d-flex justify-content-center align-items-center">
                          <div className="col-10">
                            <p>You can find events, where other users share their knowledge about knitting</p>
                          </div>

                          <div className="linkContenedor col-3">
                            <Link to="/events">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
                                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                              </svg>
                            </Link>
                          </div>

                        </div>

                    </div>              
              </div>
            
              <div className="col-10 d-flex justify-content-end p-2 rounded mt-5 mb-5">
                
                <div className="card text-center col-6 cover">
                      
                      <Link to="/new-post">
                        <img src="https://images.unsplash.com/photo-1562469162-c17fc5155156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="card-header picForCard" alt="postPic"/>
                      
                      </Link>
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

      </div>
    </div>
  )
}

export default MainPage;