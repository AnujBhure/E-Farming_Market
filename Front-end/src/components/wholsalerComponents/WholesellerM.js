import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import WholeNavbar from './WholeNavbar';

const WholesellerModule = () => {

  const navigate=useNavigate();

    const [name,setName]=useState("");
    const[data,setdata]=useState([]);
    const location = useLocation();
    const receivedData = location.state;

    useEffect(() => {
      
        fetch("http://localhost:8080/getcategories")
            .then(response => {
                if(response.ok)
                {
                    return response.json();
                }
                else{
                    throw new Error("Failed to fetch data");
                }
            })
            .then(data => {
                setdata(data);
            })
    }, []);

  return (
    <div>

      {/* Header */}
      <WholeNavbar/>
     
        <div className="container">
      {/* Content */}
      <div className="row">
        <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
          <div className="position-sticky">
            <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/wholesalerprofile" state={receivedData} class="nav-link">Profile</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  My Order
                </a>
              </li>
              <li className="nav-item">
              <Link to="/mycart" state={receivedData} class="nav-link">My cart</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </nav>
        
        <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            {/* Add Product and Uploaded Product content here */}

            <div className="container text-center">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                {data.map(cat=>(
                    <div className="col">
                    <div class="card">
                        <img src={`data:image/jpg;base64,${cat.image}`} class="card-img-top" alt="product" height="150px"/>
                        <div class="card-body">
                        <h5 class="card-title">{cat.name}</h5>
                        <p class="card-text"></p>
                        <button type="button" className="btn btn-primary"
                        onClick={()=>{navigate("/showproductswhole",{state:{data:receivedData,cid:cat.cid}})}}>Show</button>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
          </main>
      </div>
    </div>
    </div>
    
  );
};

export default WholesellerModule;
