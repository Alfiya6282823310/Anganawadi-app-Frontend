import React from 'react'

const Register = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <label htmlFor="" className="form-label">children Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <label htmlFor="" className="form-label">Age</label>
                        <input type="number" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <label htmlFor="" className="form-label">date of birth</label>
                        <input type="date" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <label htmlFor="" className="form-label">parent Name</label>
                        <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <label htmlFor="" className="form-label">weight</label>
                        <input type="number" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <label htmlFor="" className="form-label">Address</label>
                        <textarea name="" id="" className="form-control"></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <label htmlFor="" className="form-label">Adharno</label>
                        <input type="number" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <label htmlFor="" className="form-label">phone number</label>
                        <input type="number" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <label htmlFor="" className="form-label">username</label>
                        <input type="password" className="form-control" />
                        </div>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <label htmlFor="" className="form-label"> password</label>
                        <input type="password" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <label htmlFor="" className="form-label">conform password</label>
                        <input type="password" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <button className="btn btn-success">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Register