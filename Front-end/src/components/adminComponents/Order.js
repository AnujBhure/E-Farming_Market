import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function Order() {
    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://localhost:7063/api/Orders")
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
            
            <h1>Order Details</h1>
            
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Oid</th>
                        <th scope="col">orderDate</th>
                        <th scope="col">wid</th>
                        <th scope="col">totalPrice</th>
                        <th scope="col">status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(Orderdata => (
                        <tr key={Orderdata.fid}>
                            <td>{Orderdata.Oid}</td>
                           
                            <td>{Orderdata.orderDate}</td>
                            
                            <td>{Orderdata.wid}</td>
                            <td>{Orderdata.totalPrice}</td>
                            <td>{Orderdata.status}</td>
                        
                     
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    );

}

export default Order;