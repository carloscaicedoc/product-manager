import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FormProduct from '../components/FormProduct';
import DisplayList from '../components/DisplayList';
import styles from './Main.module.css';

const Main = () => {
    const [message, setMessage] = useState("Loading ...")
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/api`)
            .then(res => setMessage(res.data.message))
            .catch(err => console.log(err))
    }, [])

    const reloadList = () => {
        setRefresh(!refresh)
    }

    return (
        <>
            <h2 className={ styles.header }>{message}</h2>
            <FormProduct reloadList={reloadList} />
            <DisplayList refresh={refresh} reloadList={reloadList} />
        </>
    )
}

export default Main