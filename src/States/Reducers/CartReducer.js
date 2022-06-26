const initialCart = localStorage.getItem("Cart")

console.log(initialCart)
const reducer = (state = 0, action)=>{
    if(action.type === "addToCart")
    {
        let product = action.payload;
        product.quantity = 1;
        const savedCart = JSON.parse(localStorage.getItem("Cart"))
        if(savedCart){
            savedCart.map( (item , index) =>{
                if(item.id == product.id)
                {
                    item.quantity += 1;
                    savedCart.splice(index, 1, item)    
                    localStorage.setItem("Cart", JSON.stringify(savedCart))
                    
                }
           })
        }
        else {
            localStorage.setItem("Cart", JSON.stringify(savedCart ? [...savedCart, product] : [product]))
        }
        // if(savedCart){
        //     const exist = savedCart.find(item => item.id == product.id)
        //     if(exist)
        //     {
        //         exist.quantity += 1;
        //         localStorage.setItem("Cart", JSON.stringify(savedCart ? [...savedCart, product] : [product]))
        //     }
        // }
       
    //    localStorage.setItem("Cart", JSON.stringify(savedCart ? [...savedCart, product] : [product]))
        
                 
       // localStorage.setItem("Cart", JSON.stringify(Cart))
        
       // const data = JSON.parse(localStorage.getItem("Cart"))
        // console.log(data)
        // setCart(data ? [...data, i] : [...Cart, i])
        //  console.log(Cart)
        // localStorage.setItem("Cart", JSON.stringify(savedCart ? [...savedCart, action.payload] : [Cart]))
        // handeldata()
        // const l = Cart.length + 1;
        // localStorage.setItem("count", l)
        return state ;
    }
    else if(action.type === "removeFromCart")
    {
        return state - 1;
    }
    else {
        return state;
    }
}

export default reducer;