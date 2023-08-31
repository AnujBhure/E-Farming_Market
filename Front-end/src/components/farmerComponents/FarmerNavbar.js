import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function FarmerNavbar(){

    const navigate=useNavigate();
    const location = useLocation();
    const receivedData = location.state;

    return (
        <div>
            
        </div>
    )
}