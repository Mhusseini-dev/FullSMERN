import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const Delete = (props) => {
    
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
        .then(res => {
            props.removeFromDom(productId)
        })
    }
    return (
        <div>
            <Button color="primary" onClick={(e) => {deleteProduct(props.productId)}}>
                    Delete
                </Button>
        </div>
    )
}

export default Delete
