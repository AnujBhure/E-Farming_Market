import React, { useEffect } from 'react';
import Fruits from '../images/Fruits.jpg'
import DryFruits from '../images/DryFruits.jpg'
import Grains from '../images/Grains.jpg'
import Vegetables from '../images/Vegetables.jpg'

import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Header";
import LoginPage from "./Login";
import Navbar from "./Navbar";
import { InsertUser } from "./register";

function Home(){

    const navigate=useNavigate();
    return (
        <div>
            <Navbar/>
            <div>&nbsp;</div>
            <div className='row container'>
            <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            {/* Add Product and Uploaded Product content here */}

                <div className="container text-center">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                    <div className="col">
                        <div class="card">
                        <img src={DryFruits} class="card-img-top" alt="..." height="150px"/>
                        <div class="card-body">
                            <h5 class="card-title">Dry Fruits</h5>
                            <p class="card-text"></p>
                            <a href="#" class="btn btn-primary">Show</a>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card">
                        <img src={Grains} class="card-img-top" alt="..." height="150px"/>
                        <div class="card-body">
                            <h5 class="card-title">Grains</h5>
                            <p class="card-text"></p>
                            <a href="#" class="btn btn-primary">Show</a>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card">
                        <img src={Vegetables} class="card-img-top" alt="..." height="150px"/>
                        <div class="card-body">
                            <h5 class="card-title">Vegetables</h5>
                            <p class="card-text"></p>
                            <a href="#" class="btn btn-primary">Show</a>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card">
                        <img src={Fruits} class="card-img-top" alt="..." height="150px"/>
                        <div class="card-body">
                            <h5 class="card-title">Fruits</h5>
                            <p class="card-text"></p>
                            <a href="#" class="btn btn-primary">Show</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

            </main>
            </div>
        </div>
    )
}

export default Home;