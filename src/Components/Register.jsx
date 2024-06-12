import React, { useState } from 'react'

const Register = () => {
    const [data,changeData]=useState(
        {
            "name":"",
            "age":"",
            "dob":"",
            "parent":"",
            "weight":"",
            "address":"",
            "adar":"",
            "phone":"",
            "username":"",
            "pass":"",
            "confpass":""
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
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <label htmlFor="" className="form-label">children Name</label>
                            <input type="text" className="form-control" name='name' value={data.value} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <label htmlFor="" className="form-label">Age</label>
                        <input type="number" className="form-control" name='age' value={data.age} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <label htmlFor="" className="form-label">date of birth</label>
                        <input type="date" className="form-control" name='dob' value={data.dob} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <label htmlFor="" className="form-label">parent Name</label>
                        <input type="text" className="form-control" name='parent' value={data.parent} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <label htmlFor="" className="form-label">weight</label>
                        <input type="number" className="form-control" name='weight' value={data.weight} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <label htmlFor="" className="form-label">Address</label>
                        <textarea name="address" id="" className="form-control" value={data.address} onChange={inputHandler}></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <label htmlFor="" className="form-label">Adharno</label>
                        <input type="number" className="form-control" name='adar' value={data.adar} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <label htmlFor="" className="form-label">phone number</label>
                        <input type="number" className="form-control" name='phone' value={data.phone} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <label htmlFor="" className="form-label">username</label>
                        <input type="password" className="form-control" name='username' value={data.username} onChange={inputHandler} />
                        </div>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <label htmlFor="" className="form-label"> password</label>
                        <input type="password" className="form-control" name='pass'  value={data.pass} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <label htmlFor="" className="form-label">conform password</label>
                        <input type="password" className="form-control" name='confpass' value={data.confpass} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <button className="btn btn-success" onClick={readValue}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Register