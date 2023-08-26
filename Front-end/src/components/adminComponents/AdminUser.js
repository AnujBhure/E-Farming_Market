import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function Adminadmin() {
    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://localhost:7063/api/Users/getadminfromuser")
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
        <h1>Admin from user table</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Uid</th>
                        <th scope="col">fname</th>
                        <th scope="col">lname</th>
                        <th scope="col">email</th>
                        <th scope="col">contact</th>
                        <th scope="col">type</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(Admin => (
                        <tr key={Admin.uid}>
                            <td>{Admin.uid}</td>
                            <td>{Admin.fname}</td>                          
                            <td>{Admin.lname}</td>
                            <td>{Admin.email}</td>
                            <td>{Admin.contact}</td>
                            <td>{Admin.type}</td>
                        
                     
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    );

}

export default Adminadmin;