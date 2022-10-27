import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../../images/logo.png"

const AddPremium = () => {
    return (
        <div>
            <div>

                <div className="edit-background">
                    {/* Content Header (Page header) */}
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-4">
                                    <Link to="../../admin">
                                        <div className="brand-link">
                                            <img src={Logo} alt="MusicHub" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-sm-8">
                                    <ol className="breadcrumb float-sm-right">
                                        <Link to="" className="breadcrumb-item">Premium</Link>
                                        <li className="breadcrumb-item active">
                                            <Link to="../admin/musictracks" className="breadcrumb-item edit-top-link">Premium</Link>
                                        </li>
                                        <li className="breadcrumb-item active">
                                            <Link to="../../admin" className="breadcrumb-item edit-top-link">Home</Link>
                                        </li>
                                    </ol>
                                </div>{/* /.col */}
                            </div>{/* /.row */}
                            <div className="container">
                                <div className="row justify-content-around">
                                    <form action="" className="col-md-6 bg-light p-3 my-3">
                                        <h1 className="text-center text-uppercase h3 py-3">Add Premium</h1>
                                        <div className="form-group">
                                            <label htmlFor="preaccID">Account ID</label>
                                            <input type="text" name="preaccID" id="preaccID" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="predateregister">Date Register</label>
                                            <input type="text" name="predateregister" id="predateregister" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="preaccID">Date End</label>
                                            <input type="text" name="preaccID" id="preaccID" className="form-control" />
                                        </div>
                                        <input type="submit" value="Submit" className="btn-primary btn btn-block" />
                                    </form>
                                </div>

                            </div>
                        </div>{/* /.container-fluid */}
                    </div>
                </div >
            </div>
        </div>
    )
}

export default AddPremium
