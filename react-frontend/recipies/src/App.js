import React, {Component, useState} from 'react'
import './App.css'
import axios from 'axios'

//Components
import Header from './components/header'
import Footer from './components/footer'
import Saved from './components/saved'
import Search from './components/search'
import Create from './components/create'
import SignInButton from './components/signIn'
import User from './components/profile'
import Home from './components/home'

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Link } from 'react-router-dom'

// const recipies = [
//   {id: '1', name: 'recipie 1'},
//   {id: '2', name: 'recipie 2'},
//   {id: '3', name: 'recipie 3'}
// ]
function App() {
  const [url, setUrl] = useState('')
  const [sent, setSent] = useState(false)
  const [name, setName] = useState('')
  //State for a user?

  const sendUrl = async (e) => {
    e.preventDefault()
    setSent(true)

    try{
      await axios.post('http://localhost:3002/get_text', {
        url, 
        name
      })
    } 
    catch (error) {
      console.log(error)
    }
  }

  // const componentDidMount = () => {
  //   fetch('/')
  //     .then(res => res.json())
  //     .then(users => this.setState({users}))
  //     console.log(this.state)
  // }

    return(
      <div className="App">
      <BrowserRouter>
        <React.Fragment>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<User/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/saved' element={<Saved/>}/>
        <Route path='*' element={<p>Path is not resolved</p>}/>
        </Routes>
        {/* <div className='title'>
        <h1>Recipies without the Rubbish</h1>
        </div> */}
        {/* <ul> {recipies.map((recipie) => (
          <li key={recipie.id}>{recipie.name}</li>
        ))}
          </ul> */}
        <Footer/>
        </React.Fragment>
        </BrowserRouter>
    </div>
    )
  }

export default App
