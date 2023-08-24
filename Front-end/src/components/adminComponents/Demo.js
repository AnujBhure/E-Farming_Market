import React, { Fragment, useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
const Demo=()=>{
  const data =[
    {
      uid:1,
      fid:2,
      status:0
    }
  ]
  const [data1,setdata]=useState([]);

useEffect(()=>{
    setdata(data);
  },[])
  return(
    <div>
      <Fragment>
      <Table striped bordered hover>
      <thead>
        <tr>
          
          <th>FID</th>
          <th>UID</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        {
          data && data.length > 0 ?
          data.map((item,index)=>{
            return(
              <tr key={index}>
                  <td>{item.fid}</td>
                  <td>{item.uid}</td>
                  <td>{item.status}</td>
              </tr>
            )
          })
          :
          "loading ...."
        }
      </tbody>
    </Table>
      </Fragment>
    </div>
  )
}

export default Demo;