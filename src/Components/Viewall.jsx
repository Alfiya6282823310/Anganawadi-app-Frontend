import React, { useState } from 'react'

const Viewall = () => {
    const [data,changeDta]=useState(
        [
            { "name":"Anusha","dob":"26-09-2014", "height":23, "weight":23}
            { "name":"Anusha","dob":"26-09-2014", "height":23, "weight":23}
            
        ]
    )
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">dob</th>
                                    <th scope="col">hieght</th>
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
                                    <td>{value.height}</td>
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