import React, {useState, useEffect} from "react"
import axios from "axios"
import { Link, navigate } from "@reach/router"

const AuthorsTable = () => {
    const [authors, setAuthors] = useState([])

    useEffect( () => {
        axios.get("http://localhost:8000/api/authors")
            .then(response => setAuthors(response.data.Authors))
            .catch(error => console.log("an error occured: ", error))
    }, [])


    const getAuthorId = author => {
        return `/${author._id}`
    }

    const editAuthorUrl = author_id => {
        return `${author_id}/edit`
    }

    const deleteAuthor = url => {
        axios.delete("http://localhost:8000/api/authors" + url)
            .then(response => console.log("deleted ", response))
            .then(()=> authors( {setAuthors: -1} ))
            .catch(error => console.log("a problem occured: ", error))
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p><Link to="/new">Submit your favourite authors:</Link></p>
                </div>
            </div>
            <div className="row">
                <div>
                <center>
                    <table className="table">
                        <thead >
                        <tr>
                            <th>Author</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            authors.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>
                                        <button className="btn"><Link to={ getAuthorId(item) }>Edit</Link></button>
                                        <button className="btn" onClick={ (e)=>{deleteAuthor(getAuthorId(item))} }>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                    </center>
                </div>
            </div>
        </div>
    )

}

export default AuthorsTable
