import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import ExportApis from '../API/ExportApis';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [categories, setcategories] = useState([]);
    const [totalCart, settotalCart] = useState([]);



    function getCat() {
        ExportApis.getCategories().then((resp) => {
            if (resp.ok) {
                let Data = resp.data;
                //  console.log("data", Data);
                setcategories(Data);


            }
        });
    }

    useEffect(() => {
        getCat();

    }, []);

  






    return (
        <div className="container-fluid mb-5">
            <div className="row border-top px-xl-5">
                <div className="col-lg-3 d-none d-lg-block">
                    <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" href="#navbar-vertical" style={{ height: "65px", marginTop: "-1px", padding: "0 30px" }}>
                        <h6 className="m-0">Categories</h6>
                        <i className="fa fa-angle-down text-dark"></i>
                    </a>
                    <nav className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0" id="navbar-vertical">
                        <div className="navbar-nav w-100 overflow-hidden" style={{ height: "410px" }}>
                            <div className="nav-item dropdown">
                            </div>
                            {categories.map((cat, i) => {
                                return <a key={i} href="" className="nav-item nav-link">{cat}</a>
                            })


                            }
                        </div>
                    </nav>
                </div>
                <div className="col-lg-9">
                    <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                        <a href="" className="text-decoration-none d-block d-lg-none">
                            <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                        </a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto py-0">
                                <Link to="/" className="nav-item nav-link active">Home</Link>
                                <Link to="/shop" className="nav-item nav-link">Shop</Link>

                                <a href="#" className="nav-item nav-link">Contact</a>
                            </div>
                            <div className="navbar-nav ml-auto py-0">
                                <Link to="/LoginNav" className="nav-item nav-link">Login</Link>
                                <a href="" className="nav-item nav-link">Register</a>
                            </div>
                        </div>
                    </nav>
                    <Banner />
                </div>
            </div>
        </div>
    )
}
