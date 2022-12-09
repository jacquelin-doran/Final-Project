import React from 'react'
import { Link } from 'react-router-dom'
import picture from '../assets/whisk.png'

const Home = () => {
    return(
        <>
        <div className='container'>
        <h1 className='title'>Recipies without Rubbish</h1>
        <img className='whisk' src={picture}></img>
        </div>
        </>

    )
}
export default Home