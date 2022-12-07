import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

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
    <form action="/" method="get">
      <label htmlFor="search">
        <span className="searchBar">Search for a recipie</span>
      </label>
      <div>
        <input
          type="text"
          id="search"
          placeholder="Hungry?"
          name="searchBar"
        ></input>
      </div>
      <button type="submit">Search</button>

      <div className='searchGroup'>
        { !sent ? (
          <>
          <h1>Enter name for file and URL</h1>
          <form onSubmit={sendUrl} className='form'>
            <input type='text' className='text-input' value={name} onChange={(e) => setName(e.target.value)}/>
            <input type='text' className='text-input' value={url} onChange={(e) => setUrl(e.target.value)}/>
            <button type='submit'>Create File</button>
          </form>
          </>
        ): (
          <h1>File created</h1>
        )}
        </div>
      <Link to='/'>Home</Link>
    </form>
  );
}

export default Search;
