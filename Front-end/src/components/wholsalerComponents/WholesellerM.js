import React from 'react';
import img1 from '../images/DryFruits.jpg'
import img2 from '../images/Fruits.jpg'
import img3 from '../images/Grains.jpg'

import 'bootstrap/dist/css/bootstrap.min.css';

const WholesellerModule = () => {
  return (
    <div className="container">
      {/* Header */}
      <header className="mb-4">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
                Whoseller Portal
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
                  <button className="btn btn-outline-primary me-2">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
     

      {/* Content */}
      <div className="row">
        <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
          <div className="position-sticky">
            <ul className="nav flex-column">
            <li className="nav-item">
                <a className="nav-link active" href="#">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  My Order
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  My Cart
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Setting
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          {/* Add Product and Uploaded Product content here */}


          <div className="container text-center">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          <div className="col">
            <div class="card">
              <img src={img1} class="card-img-top" alt="..." height="150px"/>
              <div class="card-body">
                <h5 class="card-title">Dry Fruits</h5>
                <p class="card-text"></p>
                <a href="#" class="btn btn-primary">Buy</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img src={img3} class="card-img-top" alt="..." height="150px"/>
              <div class="card-body">
                <h5 class="card-title">Grains</h5>
                <p class="card-text"></p>
                <a href="#" class="btn btn-primary">Buy</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img src={img1} class="card-img-top" alt="..." height="150px"/>
              <div class="card-body">
                <h5 class="card-title">Vegetables</h5>
                <p class="card-text"></p>
                <a href="#" class="btn btn-primary">Buy</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img src={img2} class="card-img-top" alt="..." height="150px"/>
              <div class="card-body">
                <h5 class="card-title">Fruits</h5>
                <p class="card-text"></p>
                <a href="#" class="btn btn-primary">Buy</a>
              </div>
            </div>
          </div>
        </div>
      </div>



        </main>
      </div>


      

     
      {/* Footer */}
      <footer className="mt-5 text=gry bg-secondary text-white p-3">
        <div className="row">
          <div className="col-md-6 ">
            <h5>Contact Us</h5>
            <p>Email: contact@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="col-md-6">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WholesellerModule;
