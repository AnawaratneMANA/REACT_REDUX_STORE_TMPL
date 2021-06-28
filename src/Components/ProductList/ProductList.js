import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from 'axios';

const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products);
    console.log(products);

    //Fetching Items from the external API
    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
        .catch((error) => {
            console.log("Error", error);
        });
        console.log(response);
    };

    //UseEffects Hook to load items at the initiation.
    useEffect(()=> {
        fetchProducts();
    }, []);

    return (
        <div>
            <ProductComponent products={products}/>
        </div>
    )
}
export default ProductListing;
