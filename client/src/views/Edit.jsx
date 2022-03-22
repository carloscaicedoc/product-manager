import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import styles from './Edit.module.css'


const Edit = () => {
    const { id } = useParams()
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const history = useHistory()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
            .catch(err => console.log(err))
    }, [])

    const submitHandler = e => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/${id}`, { title, price, description })
            .then(res => history.push("/"))
            .catch(err => console.log(err))
    }

    return <>
        <h1 className={ styles.header}>Edit Product Info</h1>
        <form onSubmit={submitHandler} className={ styles.form }>
            <div className={ styles.input }>
                <label className={ styles.label }>Title</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} name="title" value={title} />
            </div>
            <div className={ styles.input }>
                <label className={ styles.label }>Price</label>
                <input type="number" onChange={(e) => setPrice(e.target.value)} name="price" value={price} />
            </div>
            <div className={ styles.input }>
                <label className={ styles.label }>Description</label>
                <input type="text" onChange={(e) => setDescription(e.target.value)} name="description" value={description} />
            </div>
            <button className={ styles.button }>Submit Changes</button>
        </form>
    </>
}

export default Edit