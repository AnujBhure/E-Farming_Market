import React from "react";

export default function Footer(){
    return (
        <div className="App-header">
            <footer className="mt-5 text=gry bg-secondary text-white p-3">
                <div className="row">
                <div className="col-md-6 ">
                    <h5>Contact Us</h5>
                    <p>Email: <a href="#"  className="icon-link icon-link-hover">contact@example.com</a></p>
                    <p>Phone: (123) 456-7890</p>
                </div>
                <div className="col-md-6">
                    <h5>About Us</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                </div>
            </footer>
            <footer className="bg-dark text-white text-center py-3">
                &copy; 2023 e-Farming Market
            </footer>
        </div>
    )
}