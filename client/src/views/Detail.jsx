import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useHistory } from 'react-router-dom';


const Detail = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [])

    const handlerDelete = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            console.log(res)
            history.push('/')
        })
        .catch(err =>  console.log(err))
    }

    return (
        <div className="text-center my-auto">
            {
                product ? (
                    <>
                        <h3 className="mb-3 mt-5">{product.title}</h3>
                        <h4 className="mb-3">Price: {product.price}</h4>
                        <p className="w-50 mx-auto mb-4">Description: {product.description}</p>
                        <div className="d-flex justify-content-center align-items-center gap-4">
                            <Link to={`/`} className="btn btn-outline-success mt-3 px-4 fw-bold text-success">
                                Home
                            </Link>
                            <Link to={`/products/${product._id}/edit`} 
                            className="btn btn-outline-warning mt-3 px-4 fw-bold text-warning">
                                Edit
                            </Link>
                            <Link to={`/products/${product._id}/delete`} onClick={(e)=>handlerDelete()}
                            className="btn btn-outline-danger mt-3 px-4 fw-bold text-danger">
                                Delete
                            </Link>
                        </div>
                    </>
                ) : (
                    <h2>Loading product info ...</h2>
                )
            }
        </div>
    )
}

export default Detail