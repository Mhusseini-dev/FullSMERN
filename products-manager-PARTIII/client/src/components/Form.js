import React from 'react'

const Form = props => {
    return (
        <form onSubmit={props.onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input 
                type="text" onChange={props.titleHandler} 
                value={props.title}
                />
            </p>
            <p>
                <label>Price</label><br/>
                <input 
                type="number" 
                onChange={props.priceHandler} 
                value={props.price}
                />
            </p>
            <p>
                <label>Description</label><br/>
                <textarea 
                onChange={props.descriptionHandler} 
                value={props.description}
                >
                </textarea>
            </p>
            <input type="submit" value="Add Product!"/>
        </form>
    )
}

export default Form
