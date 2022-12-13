import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {Button, InputGroup, Form} from 'react-bootstrap'
import FileSaver from 'file-saver'
import 'bootstrap/dist/css/bootstrap.min.css'

function Search() {
  const [url, setUrl] = useState('')
  const [sent, setSent] = useState(false)
  const [name, setName] = useState('')
  const [instructions, setInstructions] = useState('')

  const sendUrl = async (e) => {
    e.preventDefault()
    setSent(true)

    try{
      await axios.post('http://localhost:3002/get_text', {
        url, 
        name
      })
      .then(function (response) {
        console.log("ANYTHING")
        setInstructions(response.data) 
      })
      .catch(function (error) {
        console.log(error)
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
          <h1>Search for a Recipe</h1>
          <form onSubmit={sendUrl} className='form'>
            <div className='recipie-form'>
              <label for='url'>Recipe URL: </label>
              <input type='text' id='url' value={url} onChange={(e) => setUrl(e.target.value)}></input>
              <label for='name'>Recipe Name: </label>
              <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <Button type='submit'>Search</Button>
          </form>
          </>
        ): (
          <div className='recipie-display'>
          <h1>Recipe</h1>
          <div> 
            {instructions.split("<ul>").map(element => {
        {console.log(element)}
        return <span>{element}</span>})}
          </div>
          </div>
        )}
        </div>
    </div>
  )
}

export default Search;
