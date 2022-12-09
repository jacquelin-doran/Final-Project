import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {Button, InputGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Search() {
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
  return (
    <div className='container'>
      <div className='searchGroup'>
        { !sent ? (
          <>
          <h1>Search for a recipie</h1>
          <form onSubmit={sendUrl} className='form'>
            <InputGroup className='text-input' value={name} onChange={(e) => setName(e.target.value)}/>
            <InputGroup className='text-input' value={url} onChange={(e) => setUrl(e.target.value)}/>
            <Button type='submit'>Search</Button>
          </form>
          </>
        ): (
          <h1>File created</h1>
        )}
        </div>
    </div>
  )
}

export default Search;
