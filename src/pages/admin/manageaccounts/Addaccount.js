import React from 'react'
import Logo from "../../../images/logo.png"
import { Link } from 'react-router-dom'

const Addaccount = () => {
    var showdate = new Date();
    // var displaytodaysdate = showdate.getDate() + '/' + showdate.getMonth() + '/' + showdate.getFullYear();
    var today = showdate.toDateString();
    return (
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
                                    <Link to="" className="breadcrumb-item">Songs</Link>
                                    <li className="breadcrumb-item active">
                                        <Link to="../admin/musictracks" className="breadcrumb-item edit-top-link">Song</Link>
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
                                    <h1 className="text-center text-uppercase h3 py-3">Add Account</h1>
                                    <div className="form-group">
                                        <label htmlFor="fullname">Full Name</label>
                                        <input type="text" name="fullname" id="fullname" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="s">Date Of Birth</label>
                                        <input type="text" name="accdob" id="accdob" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="songprice">Phone Number</label>
                                        <input type="text" name="accphone" id="accphone" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="accusername">Username</label>
                                        <input type="text" name="accusername" id="accusername" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="accpass">Password</label>
                                        <input type="password" name="accpass" id="accpass" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="songtype">Role Name</label>
                                        <select className="form-select form-control" aria-label="Default select example" name="songtype" id="songtype">
                                            <option selected>Choose Role</option>
                                            <option value="1">User</option>
                                            <option value="2">Manager</option>
                                            <option value="3">Admin</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="songstate">Position</label>
                                        <select className="form-select form-control" aria-label="Default select example" name="songstate" id="songstate">
                                            <option selected>Choose User Position</option>
                                            <option value="1">Ordinary</option>
                                            <option value="2">Singer</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-3 text-center">
                                                <label htmlFor="addavatar">Avatar</label>
                                                <input type="button" value="..." id="addavatar" name="addavatar" className="form-control text-center" />
                                            </div>
                                            <div className="col-9 text-center" >
                                                <label htmlFor="accregisterdate" >Register Date</label>
                                                <input type="text" value={today} name="accregisterdate" id="accregisterdate" className="form-control text-center" readOnly={true} />
                                            </div>
                                        </div>
                                    </div>
                                    <input type="submit" value="Submit" className="btn-primary btn btn-block" />
                                </form>
                            </div>

                        </div>
                    </div>{/* /.container-fluid */}

                </div>

                {/* /.content-header */}
                {/* Main content */}
                {/* <section className="content">
                    <div className="container-fluid"> */}


                {/* <br /> */}


                {/* /.row (main row) */}
                {/* </div>/.container-fluid */}
                {/* </section> */}
                {/* /.content */}
            </div >
        </div>
    )
}

export default Addaccount
