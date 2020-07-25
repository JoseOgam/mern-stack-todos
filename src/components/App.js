import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className='container'>
          <h2>MERN-Stack Todo App</h2>
        </div>
      </Router>
    )
  }
}
export default App
