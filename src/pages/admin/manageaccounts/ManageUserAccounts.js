import React from 'react'
import { Link } from 'react-router-dom'

const ManageUserAccounts = () => {
    return (
        <div>
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 title-color">Account</h1>
                            </div>{/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <Link to="" className="breadcrumb-item">Account</Link>
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
                            <Link to="../../addaccount"  >
                                <p className="btn btn-primary">Add Account</p>
                            </Link>
                        </div>
                        {/* <br /> */}
                        <table className="tbl-full table table-striped ">
                            <thead >
                                <tr >
                                    <th>No. </th>
                                    <th>Full Name</th>
                                    <th>Date Of Birth</th>
                                    <th>Phone Number</th>
                                    <th>Email</th>
                                    <th>Avatart</th>
                                    <th>Username</th>
                                    <th>Password</th>
                                    <th>Role Name</th>
                                    <th>Register Date</th>
                                    <th>Singer</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr >
                                    <td>1.</td>
                                    <td>J9</td>
                                    <td>9/6/96</td>
                                    <td>0123456789</td>
                                    <td>nvtquoca18155@cusc.ctu.edu.vn</td>
                                    <td>link</td>
                                    <td>j929</td>
                                    <td>123456</td>
                                    <td>User</td>
                                    <td>24/10/2022</td>
                                    <td>None</td>
                                    <td>
                                        <Link to="../../addtracks" className="btn-update-admin btn btn-light">Update</Link>
                                        {/* <input type="submit" value="Update" className="btn-update-admin btn btn-light" /> */}
                                        <Link to="" className="btn-delete-admin btn btn-light">Delete</Link>
                                        {/* <a href="#" className="btn-delete-admin btn btn-light">Delete</a> */}
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

export default ManageUserAccounts
