import React from 'react'
import SignInButton from './signIn'


function Header(){
    return(
        <><nav className='navbar'>
            <div className='container' id='header'>
                <span>
                    <label className='username'>Username: </label>
                    <input type='text'id='username' name='username'></input>
                </span>
                <span>
                    <label className='password'>Password: </label>
                    <input type='password' id='password' name='password' required></input>
                </span>
                <span>
                    <input type='submit' value='Sign In'></input>
                </span>
            </div>
        </nav><SignInButton /></>
    )

}

export default Header