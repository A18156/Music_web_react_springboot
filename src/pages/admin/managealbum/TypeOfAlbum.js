import React from 'react'
import { Link } from 'react-router-dom'

const TypeOfAlbum = () => {
    return (
        <div>
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 title-color" >Type Of Albums</h1>
                            </div>{/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <Link to="" className="breadcrumb-item">Type Of Songs</Link>
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
                            <Link to="../../addalbumtypes"  >
                                <p className="btn btn-primary">Add Album Type</p>
                            </Link>
                        </div>
                        {/* <br /> */}
                        <table className="tbl-full table table-striped ">
                            <thead >
                                <tr >
                                    <th>No. </th>
                                    <th>Album Types</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr >
                                    <td>1.</td>
                                    <td>EDM</td>
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

export default TypeOfAlbum
