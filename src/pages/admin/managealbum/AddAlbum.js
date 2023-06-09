import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../../images/logo.png"


const AddAlbum = () => {
    const [selectAlbumType, setSelectAlbumType] = useState('');
    const [selectAlbumState, setSelectAlbumState] = useState('');
    var showdate = new Date();
    // var displaytodaysdate = showdate.getDate() + '/' + showdate.getMonth() + '/' + showdate.getFullYear();
    var today = showdate.toDateString();
    return (
        <div>
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
                                            <Link to="" className="breadcrumb-item">Albums</Link>
                                            <li className="breadcrumb-item active">
                                                <Link to="../admin/musictracks" className="breadcrumb-item edit-top-link">Album</Link>
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
                                            <h1 className="text-center text-uppercase h3 py-3">Add Album</h1>
                                            <div className="form-group">
                                                <label htmlFor="fullname">Album Name</label>
                                                <input type="text" name="fullname" id="fullname" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="singername">Singer</label>
                                                <input type="text" name="singername" id="singername" className="form-control" />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="Albumtype">Album Type</label>
                                                <select className="form-select form-control" aria-label="Default select example" name="Albumtype" id="Albumtype" value={selectAlbumType} onChange={(e) => setSelectAlbumType(e.target.value)}
                                                >
                                                    <option value="0">Choose Album Type</option>
                                                    <option value="1">EDM</option>
                                                    <option value="2">Ballad</option>
                                                    <option value="3">Pop</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="Albumstate">Album State</label>
                                                <select className="form-select form-control" aria-label="Default select example" name="Albumstate" id="Albumstate" value={selectAlbumState} onChange={(e) => setSelectAlbumState(e.target.value)}>
                                                    <option value="0">Choose Album State</option>
                                                    <option value="1">Premium</option>
                                                    <option value="2">Normal</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-3 text-center">
                                                        <label htmlFor="Albumimages">Image</label>
                                                        <input type="button" value="..." id="Albumimages" name="Albumamages" className="form-control text-center" />
                                                    </div>
                                                    <div className="col-9 text-center" >
                                                        <label htmlFor="dateupload" >Date Upload</label>
                                                        <input type="text" value={today} name="dateupload" id="dateupload" className="form-control text-center" readOnly={true} />
                                                    </div>
                                                </div>
                                            </div>
                                            <input type="submit" value="Submit" className="btn-primary btn btn-block" />
                                        </form>
                                    </div>

                                </div>
                            </div>{/* /.container-fluid */}

                        </div>
                    </div >

                </div >
            </div>
        </div>
    )
}

export default AddAlbum
