import React from 'react'
import { Link } from 'react-router-dom'

const PremiumList = () => {
    return (
        <div>
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 title-color" >Premium</h1>
                            </div>{/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <Link to="" className="breadcrumb-item">Premium</Link>
                                    <li className="breadcrumb-item active">Home</li>
                                </ol>
                            </div>{/* /.col */}
                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                {/* /.content-header */}
                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                        <div>
                            <Link to="../../addpremium"  >
                                <p className="btn btn-primary">Add Premium</p>
                            </Link>
                        </div>
                        {/* <br /> */}
                        <table className="tbl-full table table-striped ">
                            <thead >
                                <tr >
                                    <th>No. </th>
                                    <th>Username</th>
                                    <th>Full Name</th>
                                    <th>Date Begin</th>
                                    <th>Date End</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr >
                                    <td>1.</td>
                                    <td>J9</td>
                                    <td>27/10/2022</td>
                                    <td>27/04/2023</td>
                                    <td>
                                        <Link to="../../addpremium" className="btn-update-admin btn btn-light">Update</Link>
                                        <Link to="" className="btn-delete-admin btn btn-light">Delete</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>


                        {/* /.row (main row) */}
                    </div>{/* /.container-fluid */}
                </section>
                {/* /.content */}
            </div>
        </div>
    )
}

export default PremiumList
