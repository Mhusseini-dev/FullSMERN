import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import Form from './Form';

const Update = (props) => {
    const { id } = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] =useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [])

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/'+ id +"/edit", {
            title,
            price,
            description
        })
            .then(res => console.log(res));
        navigate("/product/"+ id);
    }

    const titleHandler = e => setTitle(e.target.value);

    const priceHandler = e => setPrice(e.target.value);

    const descriptionHandler = e => setDescription(e.target.value);

    return (
        <div>
            <h1>Update a Product: </h1>
            <Form
            title = {title}
            price = {price}
            description = {description} 
            onSubmitHandler={updateProduct} 
            titleHandler={titleHandler} 
            priceHandler={priceHandler} 
            descriptionHandler={descriptionHandler}
            />
        </div>
    )
}

export default Update
