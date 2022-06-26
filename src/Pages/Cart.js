import React, { createContext, useContext, useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import Navbar2 from '../Components/Navbar2'
import Topbar from '../Components/Topbar'
import Context from '../contextApi/Context'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../Store/CartSlice'


export const CartContext = createContext();

export default function Cart() {
    // const Products = useContext(Context);
    const data = useSelector(state=>state.cart)
    const dispatch = useDispatch();
    
    const [Cart, setCart] = useState([])
    const [Count, setCount] = useState(1)

      let total =0;

    
     console.log(data)

    const Cartdelete = (id) => {
        // const index = Cart.findIndex((i) => i.id == id)
        // Cart.splice(index, 1)
        // setCart([...Cart])
        // localStorage.setItem("Cart", JSON.stringify([...Cart]))

        // console.log(localStorage.getItem(Cart.id))
        dispatch(remove(id));
        

    }



   const handleincrement =(i)=>{

        const data = Cart[i];
        data.count =data.count+1;
        Cart.splice(i,1,data)
        const newdata = Cart;
        setCart(newdata); 
        setCount(Count +1);
        // total+=data.price;

    }

    const handleDecrement =(i)=>
    {
        const data = Cart[i];
        if(data.count >1)
        {
            data.count =data.count-1;
            Cart.splice(i,1,data)
            const newdata = Cart;
            setCart(newdata);
            setCount(Count - 1);
            // total-=data.price;
            // console.log(total);
        }
       
    }

    

   
    return (
        <>
            <Topbar />
            <Navbar2 />
            <div class="container-fluid pt-5">
                <div class="row px-xl-5">
                    <div class="col-lg-8 table-responsive mb-5">
                        <table class="table table-bordered text-center mb-0">
                            <thead class="bg-secondary text-dark">
                                <tr>
                                    <th>Products</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody class="align-middle">


                                {
                                    data.map((prod, index) => {

                                   total += prod.price*prod.count;
                                           
                                        return <>
                                            <tr key={prod.id}>
                                                <td class="align-middle"><img src={prod.image} alt="" style={{ width: "50px" }} />{prod.title}</td>
                                                <td class="align-middle">{prod.price}</td>
                                                <td class="align-middle">
                                                     <div class="input-group quantity mx-auto" style={{ width: "100px" }}>
                                                        <div class="input-group-btn">
                                                            <button class="btn btn-sm btn-primary btn-minus" onClick={() => handleDecrement(index)} >
                                                                <i class="fa fa-minus"></i>
                                                            </button>
                                                        </div>
                                                        <input type="text" class="form-control form-control-sm bg-secondary text-center" value={prod.count}  />
                                                        
                                                        <div class="input-group-btn">
                                                            <button class="btn btn-sm btn-primary btn-plus" onClick={() => handleincrement(index)}  >
                                                                <i class="fa fa-plus" ></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="align-middle">{prod.count*prod.price}</td>
                                                <td class="align-middle"><button class="btn btn-sm btn-primary" onClick={() => Cartdelete(prod.id)}><i class="fa fa-times"></i>  </button></td>
                                            </tr>

                                        </>
                                     
                                       
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div class="col-lg-4">
                        <form class="mb-5" action="">
                            <div class="input-group">
                                <input type="text" class="form-control p-4" placeholder="Coupon Code" />
                                <div class="input-group-append">
                                    <button class="btn btn-primary">Apply Coupon</button>
                                </div>
                            </div>
                        </form>
                        <div class="card border-secondary mb-5">
                            <div class="card-header bg-secondary border-0">
                                <h4 class="font-weight-semi-bold m-0">Cart Summary</h4>
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between mb-3 pt-1">
                                    <h6 class="font-weight-medium">Subtotal</h6>
                                    <h6 class="font-weight-medium">$150</h6>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <h6 class="font-weight-medium">Shipping</h6>
                                    <h6 class="font-weight-medium">$10</h6>
                                </div>
                            </div>
                            <div class="card-footer border-secondary bg-transparent">
                                <div class="d-flex justify-content-between mt-2">
                                    <h5 class="font-weight-bold">{total}</h5>
                                    <h5 class="font-weight-bold">$160</h5>
                                </div>
                                <button class="btn btn-block btn-primary my-3 py-3">Proceed To Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
