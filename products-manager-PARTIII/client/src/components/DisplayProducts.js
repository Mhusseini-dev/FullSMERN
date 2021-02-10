import React from 'react';
import { Link } from '@reach/router';
import Delete from './Delete';

const DisplayProducts = (props) => {
    
    return (
        <div>
            {props.products.map((product, i) => {
                return (
                    <>
                <p key={i}>{product.title} {product.price} {product.description}</p>
                <Link to={`/product/${product._id}`} >Go to Product</Link>
                <Delete productId = {product._id} removeFromDom={props.removeFromDom}/>
                </>
                )
            })}
        </div>
    )
}

export default DisplayProducts
