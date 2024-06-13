import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Search = () => {
    const [data, changeData] = useState(
        {
            "name": ""
        }
    )
    const [result, setResult] = useState([])
    const inputHandler = (event) => {
        changeData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8086/search", data).then(
            (response) => {
                setResult(response.data)
            }
        ).catch()
    }
    const deleteang = (id) => {
        let input = { "_id": id }
        axios.post("http://localhost:8086/delete", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("successfully deleted")
                }
                else {
                    alert("error")
                }
            }
        ).catch().finally()
    }
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
                            <label htmlFor="" className="form-label">children name</label>
                            <input type="text" className="form-control" name='name' value={data.value} onChange={inputHandler} />
                            <col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
                            <button className="btn btn-info" onClick={readValue}>Search</button>
                        </div>
                    </div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">dob</th>
                                <th scope="col">parent</th>
                                <th scope="col">weight</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                result.map(
                                    (value, index) => {
                                        return <tr>
                                            <td>{value.name}</td>
                                            <td>{value.dob}</td>
                                            <td>{value.parent}</td>
                                            <td>{value.weight}</td>
                                            <td><button className="btn btn-danger" onClick={() => {deleteang(value._id)}}>Delete</button></td>
                                        </tr>

                                    }
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Search