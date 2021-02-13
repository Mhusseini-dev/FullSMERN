import React, { useState, useEffect } from "react"
import axios from "axios"
import { navigate, Link } from "@reach/router"

const EditAuthorForm = props => {

    const { id } = props
    const [author, setAuthor] = useState({})

    useEffect( ()=> {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(response => setAuthor(response.data.Author[0]))
            .catch(error => {
                console.log("There was an issue, ", error)
            })
    }, [])


    const [name, setName] = useState("")
    const [errors, setErrors] = useState([])

    const onSubmit = e => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`, {
            name: name,
        })
            .then(() => navigate("/"))
            .catch(err =>{
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p><Link to="/">Home</Link></p>
                    <p>Edit author:
                        {
                            errors.map((err, index) => <small key={index} style={{color:"red"}}>{err}</small>)
                        }
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <form onSubmit={ onSubmit }>
                        <div className="form-group">
                            <label>Name:</label>
                            <input onChange={(e)=>setName(e.target.value)} type="text"/>
                        </div>
                        <div className="form-group text-right">
                            <button className="btn" >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default EditAuthorForm
