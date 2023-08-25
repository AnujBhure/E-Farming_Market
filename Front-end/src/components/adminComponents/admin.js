import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link, useNavigate } from 'react-router-dom';


function Admin() {
const navigate=useNavigate();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">ADMIN</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{'--bs-scroll-height': '100px'}}>
              <li className="nav-item">
              <Link to="/admin_home" class="nav-link">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Lists
                </a>
                <ul className="dropdown-menu">
                  
                  <li>
                    <Link to="/listfarmers" class="nav-link">Farmers Details</Link>
                  </li>
                  <li>
                  <Link to="/listwholesalers" class="nav-link">Wholesalers Details</Link>
                  </li>
                  <li>
                      <Link  class="nav-link">Order Details</Link>
                  </li>
                  <li>
                  <Link to="/User" class="nav-link">User Details</Link>
                  </li>
                  <li><hr className="dropdown-divider"></hr></li>
                </ul>
              </li>
            
              <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
              
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

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Sr. No.</th>
            <th scope="col">type</th>
            <th scope="col">name</th>
            <th scope="col">email</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Admin</td>
            <td>Kharanshu Wanare</td>
            <td>kharanshuw@gmail.com</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Admin</td>
            <td>Anuj bhure</td>
            <td>anujbhure41@gmail.com</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Admin</td>
            <td>Gaurav Nande</td>
            <td>gauravnande90@gmail.com</td>
          </tr>

          <tr>
            <th scope="row">4</th>
            <td>Admin</td>
            <td>Shirish Ahire</td>
            <td>shirishahire@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
