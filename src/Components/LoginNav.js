import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import ExportApis from '../API/ExportApis';
import { Link } from 'react-router-dom';
import Login from './Login';
import Topbar from './Topbar';
import Footer from './Footer';

export default function LoginNav() {
    const [categories, setcategories] = useState([]);
  

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
<>
   <Topbar/>

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
                                {/* <a href="#" className="nav-link" data-toggle="dropdown">Dresses <i className="fa fa-angle-down float-right mt-1"></i></a>
                                <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                    <a href="" className="dropdown-item">Men's Dresses</a>
                                    <a href="" className="dropdown-item">Women's Dresses</a>
                                    <a href="" className="dropdown-item">Baby's Dresses</a>
                                </div> */}
                            </div>
                            {  categories.map((cat)=>
                            {
                                return <a href="" className="nav-item nav-link">{cat}</a>
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
                                <a href="index.html" className="nav-item nav-link active">Home</a>
                                <Link to="/shop" className="nav-item nav-link">Shop</Link>
                                <Link to="/Detail" className="nav-item nav-link">Shop Detail</Link>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <a href="cart.html" className="dropdown-item">Shopping Cart</a>
                                        <a href="checkout.html" className="dropdown-item">Checkout</a>
                                    </div>
                                </div>
                                <a href="contact.html" className="nav-item nav-link">Contact</a>
                            </div>
                            <div className="navbar-nav ml-auto py-0">
                                <Link to="/Login" className="nav-item nav-link">Login</Link>
                                <a href="" className="nav-item nav-link">Register</a>
                            </div>
                        </div>
                    </nav>
                 <Login/>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
