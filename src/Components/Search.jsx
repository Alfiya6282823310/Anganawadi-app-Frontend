import React, { useState } from 'react'

const Search = () => {
const [data,changeData]=useState(
    {
        "name":""
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
                        <col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
                        <label htmlFor="" className="form-label">children name</label>
                        <input type="text" className="form-control" name='name' value={data.value} onChange={inputHandler}/>
                        <col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
                        <button className="btn btn-info" onClick={readValue}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search