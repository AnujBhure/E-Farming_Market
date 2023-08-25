import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function Wholesalers() {
    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://localhost:7063/api/Wholesalers")
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                else {
                    throw new Error("Failed to fetch data");
                }
            })
            .then(data => {
                setdata(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);


    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }


    
    return (
        <div>
            
            <h1>Wholesaler Details</h1>
            
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">wid</th>
                        <th scope="col">uid</th>
                        <th scope="col">pincode</th>
                        <th scope="col">area</th>
                        <th scope="col">city</th>
                        <th scope="col">bdate</th>
                        <th scope="col">panNo</th>
                        <th scope="col">aadharNo</th>                       
                        <th scope="col">status</th>          
                    </tr>
                </thead>
                <tbody>
                    {data.map(Wholesalersdata => (
                        <tr key={Wholesalersdata.wid}>
                            <td>{Wholesalersdata.uid}</td>
                           
                            <td>{Wholesalersdata.pincode}</td>
                            
                            <td>{Wholesalersdata.wid}</td>
                            <td>{Wholesalersdata.totalPrice}</td>
                            <td>{Wholesalersdata.status}</td>
                        
                     
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    );

}

export default Wholesalers;