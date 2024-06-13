import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';



const Login = () => {
    const [data, changeData] = useState({
        "username": "",
        "pass": "",
        "confpass": ""
    });

    const navigate = useNavigate();

    const inputHandler = (event) => {
        changeData({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = () => {
        console.log(data);
        if (data.pass === data.confpass) {
            alert("Passwords match");
            axios.post("http://localhost:8086/view", data)
                .then(response => {
                    console.log(response.data);
                    navigate('/viewall');  
                })
                .catch(error => {
                    console.error(error);
                });
        } else {
            alert("Passwords do not match");
        }
    };

    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name='username' value={data.username} onChange={inputHandler} />
                                    <label htmlFor="floatingInput">User name</label>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name='pass' value={data.pass} onChange={inputHandler} />
                                    <label htmlFor="floatingPassword">Password</label><br />
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Confirm Password" name='confpass' value={data.confpass} onChange={inputHandler} />
                                    <label htmlFor="floatingPassword">Confirm Password</label><br />
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div className="btn-group">
                                    <button className="btn btn-primary" onClick={readValue}>Sign in</button>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div className="btn-group">
                                    <button className="btn btn-light"><Link to="/">Sign up</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
