import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function MyCart(){

    const navigate=useNavigate();
    const [msg,setMsg]=useState("");
    const [data,setData]=useState([]);
    const location = useLocation();
    const receivedData = location.state;

    useEffect(() => {
          fetch(`http://localhost:8080/getorderitemsbyoid?oid=1`)
              .then(response => {
                  if(response.ok)
                  {
                      return response.json();
                  }
                  else{
                      setMsg("Failed to fetch data");
                  }
              })
              .then(data => {
                  setData(data);
              })
      }, []);

    return (
        <div>
            <header className="mb-4">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Welcome, {receivedData.fname}
                    </a>
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li>
                        <Link to="/wholesaler_home" class="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                        <input
                            type="text"
                            className="form-control me-2"
                            placeholder="Search"
                        />
                        </li>
                        &nbsp;&nbsp;&nbsp;
                        <li>
                        <button className="btn btn-primary">Search</button>
                        </li>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <li className="nav-item">
                        <button className="btn btn-outline-primary me-2"
                            onClick={()=>navigate("/")}>
                            Logout
                            </button>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
            </header>
            <div className="container text-center">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                {data.map(product=>(
                    <div className="col">
                        <div class="card">
                        <h4 class="card-title">{product.farmer_Product.product.name}</h4>
                        <h6 class="card-title">{product.farmer_Product.description}</h6>
                            <img src={`data:image/jpg;base64,${product.farmer_Product.image}`} class="card-img-top" alt="product" height="150px"/>
                            <div class="card-body">
                                <h4>Rs. {product.farmer_Product.price}</h4>
                                <p class="card-text"></p>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
             </div>
        </div>
    )
}