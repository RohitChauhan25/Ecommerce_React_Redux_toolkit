export const AddToCart = (i) =>{
    //console.log(product)
    return (dispatch)=>{
        dispatch({
            type: "addToCart",
            payload : i
        })
        
    }
}

export const RemoveFromCart = (Product) =>{
    return (dispatch)=>{
        dispatch({
            type: "removeFromCart",
            payload : Product
        })
        
    }
}