import React from 'react'

const Search = () => {

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
                        <label htmlFor="" className="form-label">children name</label>
                        <input type="text" className="form-control" />
                        <col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
                        <button className="btn btn-info">Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search