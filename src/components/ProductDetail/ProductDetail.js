import React from "react";
import {useParams} from "react-router-dom";

export default function ProductDetail() {
    let {productID} = useParams();
    return (
        <h1>{productID}</h1>
    );
}
