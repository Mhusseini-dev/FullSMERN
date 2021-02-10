import React, { useState } from 'react';
import axios from 'axios';
import Form from './Form';

const ProductForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] =useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
            setTitle("")
            setPrice("")
            setDescription("")
    }

    const titleHandler = e => setTitle(e.target.value);

    const priceHandler = e => setPrice(e.target.value);

    const descriptionHandler = e => setDescription(e.target.value);

    return (
        <Form
        title = {title}
        price = {price}
        description = {description} 
        onSubmitHandler={onSubmitHandler} 
        titleHandler={titleHandler} 
        priceHandler={priceHandler} 
        descriptionHandler={descriptionHandler}
        />
    )
}

export default ProductForm
