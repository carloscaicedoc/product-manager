import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import DeleteButton from './DeleteButton';

const DisplayList = (props) => {
    const {refresh, reloadList} = props
    const [productList, setProductList] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(res => setProductList(res.data))
            .catch(err => console.log(err))
    }, [refresh])

    return <>
                <h2 className="fs-2">All Products</h2>
        {productList ? (
            <div className="container col-7">
                
            <table className="table mx-auto">
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Price</td>
                        <td colSpan={2}>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        productList.map((product, i) => (
                            <tr key={i}>
                                <td> <Link to={`/products/${product._id}`}>{product.title}</Link></td>
                                <td>{product.price}</td>
                                <td> <Link to={`products/${product._id}/edit`} className="btn btn-success">Edit</Link></td>
                                <td> <DeleteButton id={product._id} reloadList={reloadList} >Delete</DeleteButton></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
                    </div>
        ) :
            <h3>Loading Products ...</h3>
        }
    </>
}

export default DisplayList;