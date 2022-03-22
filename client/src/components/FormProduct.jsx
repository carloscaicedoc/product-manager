import React, { useState } from 'react';
import axios from 'axios';
import styles from './FormProduct.module.css';

const FormProduct = (props) => {
    const {reloadList} = props
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/products`, { title, price, description })
            .then(res => {
                setTitle("")
                setPrice(0)
                setDescription("")
                reloadList()
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={ styles.form }>
                <div className={ styles.input }>
                    <label className={ styles.label_t }>Title</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} name="title" value={title} className={ styles.inp }/>
                </div>
                <div className={ styles.input }>
                    <label className={ styles.label }>Price</label>
                    <input type="text" onChange={(e) => setPrice(e.target.value)} name="price" value={price} className={ styles.inp }/>
                </div>
                <div className={ styles.input }>
                    <label className={ styles.label_d }>Description</label>
                    <input type="text" onChange={(e) => setDescription(e.target.value)} name="description" value={description} className={ styles.inp }/>
                </div>
                <button className={ styles.button }>Add Product</button>
            </form>
        </>
    )
}

export default FormProduct