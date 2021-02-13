import React, { useState } from "react"
import axios from "axios"
import { navigate, Link } from "@reach/router"

const CreateAuthorForm = props => {

    const [name, setName] = useState("")
    const [errors, setErrors] = useState([])

    const onSubmit = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/authors", {
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
                    <p>Add a new author:
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
                            <button className="btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default CreateAuthorForm
