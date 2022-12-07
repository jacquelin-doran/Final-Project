import React from 'react'
import { Link } from 'react-router-dom'

const User = () => {
    return(
        <div className='userInfo'>
            <p className='info'>Name:</p>
            <p className='info'>Email:</p>
            <p className='info'>Sub: </p>
        <><Link to='/saved'>Saved</Link></>
        </div>

    )
}
export default User