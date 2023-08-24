import React, { useReducer, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

const iniState={
  email:{value:"",hasError:true,error:"",touched:false},
  password:{value:"",hasError:true,error:"",touched:false},
  isFormValid:false
}

const reducer=(state,action)=>{
  switch(action.type){
      case 'update':
          const {name,value,hasError,error,touched,isFormValid}=action.data;
          return {...state,[name]:{value,hasError,error,touched},isFormValid}
      case 'reset':
          return iniState
  }
}

let LoginPage = () => {  

  const[user, dispatch] = useReducer(reducer , iniState );
  // const [msg,setMsg] = useState('');
  const navigate=useNavigate();

  const handleChange=(name,value)=>{
    const {hasError,error}=validateData(name,value);
    let isFormValid=true;
    for(const key in user)
    {
        if(user[key].hasError===true)
        {
            isFormValid = false;
            break;
        }
    }

    dispatch({type: 'update', data: {name,value,hasError, error,touched: true,isFormValid} })
  }

  const validateData=(name,value)=>{
    let hasError=false;
    let error="";
    switch(name){
        case 'email':
            var exp =/^[\w.]{3,}@gmail.com$/;
            if(!exp.test(value))
            {
                hasError = true;
                error = "Enter valid email ID";
            }
            break;
        case 'password':
            var exp1 =/(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*()]{8,}/;
            if(! exp1.test(value))
            {
                hasError = true;
                error = "Enter valid Password";
            }
            break;

            default :
                return 0;
    }
    return {hasError,error}
  }

  const submitData=(e)=>{
    e.preventDefault();
    
        const reqOptions={
          method:"POST",
          headers:{'content-type':'application/json'},
          body:JSON.stringify({
            email:user.email.value,
            password:user.password.value
          })
      }

    fetch("http://localhost:8080/login",reqOptions)
    .then(resp => resp.text())
    .then(data => {
      if(data==='a')
      {
        //alert("admin");
        navigate("/admin_home");
      }
      else if(data==='f')
      {
        //alert("farmer");
        navigate("/farmer_home");
      }
      else if(data==='w')
      {
        //alert("wholesaler");
        navigate("/wholesaler_home");
      }
      else
      {
        alert("New user");
      }
    })
  }

  return (
    
    <div>
      <nav className="navbar navbar-expand-md bg-light">
          <div className="container ">
              <ul className="navbar-nav" >
                  <li className="nav-item">
                      <Link to="/" class="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                      <Link to="/login" class="nav-link">Login</Link>
                  </li>
                  <li className="nav-item">
                      <Link to="/register" class="nav-link">Register</Link>
                  </li>
              </ul>
          </div>
        </nav>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center">Login</h3>
                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={user.email.value} 
                      onChange={(e)=>{handleChange("email",e.target.value)}}
                      required
                    /><br/>
                    <div className='text-center' style={{color:"#dc3545", display: user.email.touched && user.email.hasError?"block":"none" }}>
                      {user.email.error}
                  </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={user.password.value} 
                      onChange={(e)=>{handleChange("password",e.target.value)}}
                      required
                    /><br/>
                    <div className='text-center' style={{color:"#dc3545", display: user.password.touched && user.password.hasError?"block":"none" }}>
                      {user.password.error}
                  </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={submitData}
                      disabled={!user.isFormValid}
                    >
                      Login
                    </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={()=>{dispatch({type:'reset'})}}
                    >
                      Reset
                    </button>
                  </div>
                </form>
                {/* <div>{msg}</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;