import axios from 'axios';
import React, { useState, useEffect } from 'react'
import DisplayProducts from './components/DisplayProducts';
import ProductForm from './components/ProductForm';

export default (props) => {
    
    return (
        <div>
            <ProductForm />
            <hr/>
            <DisplayProducts products={props.products} removeFromDom={props.removeFromDom}/>
        </div>
    )
}
