import "./ProfilePage.css";

function ProfilePage() {
  return (
    <div className="container-fluid p-0">
      
      <div className="row">
        <div className="col-6 p-5">
          <img src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2F0b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="profilePic" className="w-75 bordeShadow"></img>
        </div>
        <div className="col-5  d-flex justify-content-around align-items-center">
        <div className="container ">
          <div className="col  mx-5 bordeShadow">
            <h1>Nombre Usuario</h1>
            <h1>Apellidos</h1>
            <h4>Nacimiento</h4>
          </div>
          
          <div className="col mx-5 bordeShadow">
          <p>Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. 
              Aliquam consectetur sit amet nunc s
              ed commodo. Vivamus mauris ante, 
              semper sed.</p>
              </div>
              </div>
        </div>
        </div>
      
    </div>
  );
}

export default ProfilePage;
