import Context from "./Context";
import React, { useEffect, useState } from 'react'
import ExportApis from '../API/ExportApis';

export default function ContextProvider(props) {
const [Products, setProducts] = useState([]);
   function getProducts() {
        ExportApis.getProduct().then((resp) => {
            if (resp.ok) {
                let Data = resp.data;
                setProducts(Data);

            }
        });
    }
    useEffect(() => {
        getProducts();
    }, []);

    return (
        <Context.Provider value={Products}>
            {props.children}
        </Context.Provider>
    )
}
