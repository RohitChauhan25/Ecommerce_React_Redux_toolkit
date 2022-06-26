import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: "cart",
    initialState:[],
    reducers:{
        add(state, action)
        {
            state.push(action.payload)
        },
        remove( state, action){
            console.log(action.payload)
            return state.filter(item=> item.id !== action.payload)

        }
    }
})


export const {add, remove} = cartSlice.actions;

export default cartSlice.reducer