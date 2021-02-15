import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import Delete from './Delete';

const Product = (props) => {
    const [product, setProduct] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => setProduct(res.data));
    }, [product])
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/products/" + product._id +"/edit"}> Edit </Link>
            {/* <Delete productId={product._id} /> */}
        </div>
    )
}

export default Product
