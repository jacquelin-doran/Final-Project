import React, {Component, useState, useEffect} from 'react'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Saved from './components/saved'
import Search from './components/search'
import Create from './components/create'
import SignInButton from './components/signIn'

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Link } from 'react-router-dom'

class App extends Component {
  state={users:[]}

  componentDidMount(){
    fetch('/')
      .then(res => res.json())
      .then(users => this.setState({users}))
      console.log(this.state)
  }

  render(){
    return(
      <div className="App">
      <BrowserRouter>
        <React.Fragment>
        <Header/>
        <Routes>
        <Route path='/' element={<Search/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/saved' element={<Saved/>}/>
        <Route path='*' element={<p>Path is not resolved</p>}/>
        </Routes>
        <div>Recipies without the Rubbish</div>
        <Footer/>
        </React.Fragment>
        </BrowserRouter>
    </div>
    )
  }
}

export default App
