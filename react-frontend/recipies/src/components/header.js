import React from 'react'
import SignInButton from './signIn'
import { Link } from 'react-router-dom'



function Header(){
    return(
        <>
        <div className='container'>
        <div className='Header'>
        <span className='link'><Link to='/saved'> Saved </Link></span>
        <span className='link'><Link to='/search'> Search </Link></span>
        <span className='link'><Link to='/create'> Create </Link></span>
        <span className='link'><Link to='/'> Home </Link></span>
        </div>
        </div>
        </>

        // <><nav className='navbar'>
        //     <div className='container' id='header'>
        //         <span>
        //             <label className='username'>Username: </label>
        //             <input type='text'id='username' name='username'></input>
        //         </span>
        //         <span>
        //             <label className='password'>Password: </label>
        //             <input type='password' id='password' name='password' required></input>
        //         </span>
        //         <span>
        //             <input type='submit' value='Sign In'></input>
        //         </span>
        //     </div>
        // </nav><SignInButton /></>
    )

}

export default Header