import React from 'react'
import SignInButton from './signIn'
import { Link } from 'react-router-dom'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


function Header(){
    return(
        <div className='header'>
        <Navbar>
            <Container>
                <Navbar.Brand href='/saved'>Recipies</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='navigation'>
                    <Nav><Link to='/saved'>Saved</Link></Nav>
                    <Nav><Link to='/search'>Search</Link></Nav>
                    <Nav><Link to='/'>Home</Link></Nav>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>

        // <>
        // <div className='container'>
        // <div className='Header'>
        // <span className='link'><Link to='/saved'> Saved </Link></span>
        // <span className='link'><Link to='/search'> Search </Link></span>
        // <span className='link'><Link to='/'> Home </Link></span>
        // </div>
        // </div>
        // </>

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