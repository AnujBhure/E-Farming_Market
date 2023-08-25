import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Admin from "./Admin";
function User()
{
    const[data,setdata]=useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
      
        fetch("https://localhost:7063/api/Users")
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
            
            <h1>Farmers List</h1>
            
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">uid</th>
                        <th scope="col">fname</th>
                        <th scope="col">lname</th>                  
                        <th scope="col">email</th>
                        <th scope="col">contact</th>
                        <th scope="col">type</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(userdata => (
                        <tr key={userdata.uid}>
                            <td>{userdata.uid}</td>
                           
                            <td>{userdata.fname}</td>
                            
                            <td>{userdata.lname}</td>
                            <td>{userdata.email}</td>
                            <td>{userdata.contact}</td>
                            <td>{userdata.type}</td>                     
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    );
}

export default User;