import React from 'react'
import Header from './header'
import Footer from './footer'
import Saved from './saved'
import Search from './search'

import { Link } from 'react-router-dom'
import {Route, Routes, Navigate, useNavigate} from 'react-router-dom'

function Main (){
    return(
        <React.Fragment>
        <Header/>
        <Routes>
        <Route path='/' element={<Search/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/saved' element={<Saved/>}/>
        <Route path='*' element={<p>Path is not resolved</p>}/>
        </Routes>
        <div>Hello World</div>
        <Footer/>
        </React.Fragment>
    )
}

export default Main;