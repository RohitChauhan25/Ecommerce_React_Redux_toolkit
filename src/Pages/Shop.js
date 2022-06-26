import React, { useContext, createContext, useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Topbar from '../Components/Topbar'
import ExportApis from '../API/ExportApis';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { add  } from '../Store/CartSlice';
import { fetchProducts } from '../Store/ProductsSlice';

const UserContext = createContext();

export default function Shop() {
    const cartValue =  useSelector(state=> state.Cart)
    const dispatch = useDispatch();
   // const [Products, setProducts] = useState([]);
   const { data :Products , status}  = useSelector(state=> state.product)
    const [fProducts, setfProducts] = useState([]);
    const [categories, setcategories] = useState([]);
    const [Cart, setCart] = useState([]);

    function Add(i) {
        dispatch(add(i))
        // const data = JSON.parse(localStorage.getItem("Cart"))
        // console.log(data)
        // setCart(data ? [...data, i] : [...Cart, i])
        //  console.log(Cart)
        // localStorage.setItem("Cart", JSON.stringify(data ? [...data, i] : [...Cart, i]))
        // handeldata()
        // const l = Cart.length + 1;
        // localStorage.setItem("count", l)

    }

    const handeldata = () => {
        var counts = [];
        const cartdata = JSON.parse(localStorage.getItem("Cart"));
        // console.log(cart)
        const pair = { count: 1 }
        if (cartdata) {
            cartdata.map((i) => {
                // Price += i.price * i.count;
           
                counts = [...counts, { ...i, ...pair }]
            })

            setCart(counts ? [...counts] : [...Cart])
            localStorage.setItem("Cart", JSON.stringify(counts ? [...counts] : [...Cart]))
        }
        else {

        }
    } 

    // function getProducts() {
    //     ExportApis.getProduct().then((resp) => {
    //         if (resp.ok) {
    //             let Data = resp.data;
    //             setProducts(Data);
    //             setfProducts(Data);
    //         }
    //     });
    // }
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

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


    function handleCat(e) {

        if (e === "All") {
            setfProducts(Products);
        }
        else {
            let newdata = Products.filter((item) => item.category === e)
            setfProducts(newdata);
        }
    }

    function getCart() {
        let data = JSON.parse(localStorage.getItem("Cart"));
        setCart(data);
    }
    return (
        <>
            <Topbar />
            <Navbar />
            <div className="container-fluid pt-5">
                <div className="row px-xl-5">
                    {/* <!-- Shop Sidebar Start --> */}
                    <div className="col-lg-3 col-md-12">
                        {/* <!-- Price Start --> */}
                        <div className="border-bottom mb-4 pb-4">
                            <h5 className="font-weight-semi-bold mb-4">Filter by price</h5>
                            <h1>{cartValue}</h1>
                            <form>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="text" className="custom-control-input" />
                                    <label className="custom-control-label" htmlFor="price-all">All Price</label>
                                    <span className="badge border font-weight-normal">1000</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="price-1" />
                                    <label className="custom-control-label" htmlFor="price-1">$0 - $100</label>
                                    <span className="badge border font-weight-normal">150</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="price-2" />
                                    <label className="custom-control-label" htmlFor="price-2">$100 - $200</label>
                                    <span className="badge border font-weight-normal">295</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="price-3" />
                                    <label className="custom-control-label" htmlFor="price-3">$200 - $300</label>
                                    <span className="badge border font-weight-normal">246</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="price-4" />
                                    <label className="custom-control-label" htmlFor="price-4">$300 - $400</label>
                                    <span className="badge border font-weight-normal">145</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                                    <input type="checkbox" className="custom-control-input" id="price-5" />
                                    <label className="custom-control-label" htmlFor="price-5">$400 - $500</label>
                                    <span className="badge border font-weight-normal">168</span>
                                </div>
                            </form>
                        </div>
                        {/* <!-- Price End -->
                
                <!-- Color Start --> */}
                        <div className="border-bottom mb-4 pb-4">
                            <h5 className="font-weight-semi-bold mb-4">Filter by  Categories </h5>
                            <form>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <span onClick={() => handleCat("All")} >All Category</span>

                                    <span className="badge border font-weight-normal"></span>
                                </div>
                                {

                                    categories.map((cat, i) => {
                                        return <>
                                            <div  key={i} className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                                <span value="electronics" onClick={() => handleCat(cat)} >{cat}</span>
                                                <span className="badge border font-weight-normal">{cat.count}</span>
                                            </div>
                                        </>

                                    })
                                }



                            </form>
                        </div>
                      
                    </div>
                    {/* <!-- Shop Sidebar End --> */}


                    {/* <!-- Shop Product Start --> */}
                    <div className="col-lg-9 col-md-12">
                        <div className="row pb-3">
                            <div className="col-12 pb-1">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <form action="">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search by name" />
                                            <div className="input-group-append">
                                                <span className="input-group-text bg-transparent text-primary">
                                                    <i className="fa fa-search"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="dropdown ml-4">
                                        <button className="btn border dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            Sort by
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="triggerId">
                                            <a className="dropdown-item" href="#">Latest</a>
                                            <a className="dropdown-item" href="#">Popularity</a>
                                            <a className="dropdown-item" href="#">Best Rating</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {Products.map((product, i) => {
                                return <>
                                    <div key={i} className="col-lg-4 col-md-6 col-sm-12 pb-1">
                                        <div className="card product-item border-0 mb-4">
                                            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                                <img className="img-fluid w-100" src={product.image} alt="" style={{ height: "350px" }} />
                                            </div>
                                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                                <h6 className="text-truncate mb-3">{product.title}</h6>
                                                <div className="d-flex justify-content-center">
                                                    <h6>${product.price}</h6><h6 className="text-muted ml-2"><del></del></h6>
                                                </div>
                                            </div>
                                            <div className="card-footer d-flex justify-content-between bg-light border">
                                                <Link to={`/Detail/${product.id}`} className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                                                {/* <a href="" className="btn btn-sm text-dark p-0"  ><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a> */}
                                                <button onClick={() => Add(product)} >Add to cart </button>
                                               

                                            </div>
                                        </div>
                                    </div>
                                </>
                            })

                            }

                        </div>
                    </div>
                    {/* <!-- Shop Product End --> */}
                </div>
            </div>
            <Footer />
        </>
    )
}
