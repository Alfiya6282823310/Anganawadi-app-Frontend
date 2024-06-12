import React, { useState } from 'react'

const Login = () => {
    const [data,changeData]=useState(
        {
            "username":"",
            "pass":""
        }
    )
    const inputHandler=(event)=>{
      changeData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name='username' value={data.username}  onChange={inputHandler}/>
                                    <label for="floatingInput">user name</label>
                                </div></div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="form-floating">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name='pass' value={data.pass} onChange={inputHandler} />
                                    <label for="floatingPassword">Password</label><br />
                                </div></div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="form-floating">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name='pass' value={data.pass} onChange={inputHandler} />
                                    <label for="floatingPassword"> Conform Password</label><br />
                                </div></div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div class="btn-group">
                                    <a href="#" class="btn btn-primary" onClick={readValue}>Sign in</a>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div class="btn-group">
                                    <a href="#" class="btn btn-primary">Sign up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            )
}

export default Login