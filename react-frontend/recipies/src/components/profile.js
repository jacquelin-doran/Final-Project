import React from 'react'

const User = () => {
    const { user } = useAuth0()

    return(
        <div className='userInfo'>
            <p className='info'>Name: {user.name}</p>
            <p className='info'>Email: {user.email}</p>
            <p className='info'>Sub: {user.sub}</p>
        </div>
    )
}
export default User