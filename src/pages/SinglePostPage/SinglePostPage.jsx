import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components'
import styles from './singlepost.module.css'

const SinglePostWrapper = styled.div`
    width: 70%;
    margin: auto;
    padding: 40px 0;
`

const SinglePostImg = styled.img`
    width: 100%;
    display: block;
    margin: auto;
`

const SinglePostTitle = styled.h1`
    font-size: 48px;
    font-family: 'Roboto', sans-serif;
`

const StatusGreen = styled.div`
    width: 15px; 
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: green;
    margin-right: 10px;
`

const StatusRed = styled.div`
    width: 15px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: red;
    margin-right: 10px;
`

const getPost = (id) => {
    return axios.get(`http://localhost:3001/posts/${id}`)
}

const SinglePostPage = () => {
    const {id} = useParams() // id поста из db.json
    const [post, setPost] = useState({})

    useEffect(() => {
        getPost(id).then(res => setPost(res.data))
    }, []) 

    return (
        <SinglePostWrapper>
            <SinglePostImg src="https://picsum.photos/900/400?grayscale" />
            <SinglePostTitle>{post.name}</SinglePostTitle>
            <hr/>
            <div className={styles['post-info']}>
                <p className={styles.duration}> Продолжительность: {post.duration} м. </p>
                <p className={styles.status}> Статус: 
                {console.log(post.status)}
                {post.important ? (
                    <p className={styles['status-wrapper']}><StatusGreen/>Важный</p> 
                ) : (
                    <p className={styles['status-wrapper']}><StatusRed/>Не важный</p> 
                )} 
                </p>
            </div>
            <p>Дополнительная информация по теме</p>
        </SinglePostWrapper>
    );
};

export default SinglePostPage;