import React, {Component} from 'react'
import './App.css'

class App extends Component {
  state={users:[]}

  componentDidMount(){
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users}))
  }

  render(){
    return(
      <div></div>
    )
  }
}

export default App
