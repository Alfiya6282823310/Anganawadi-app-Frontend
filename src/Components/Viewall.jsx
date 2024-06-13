import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Viewall = () => {
    const [data,changeDta]=useState([])
    const fetchData=()=>{
        axios.post("http://localhost:8086/view",data).then(
            (response)=>{
                changeDta(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
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
                                data.map(
                                (value,index)=>{
                                    return  <tr>
                                    <td>{value.name}</td>
                                    <td>{value.dob}</td>
                                    <td>{value.parent}</td>
                                    <td>{value.weight}</td>
                                </tr>

                                }
                                )
                               }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewall