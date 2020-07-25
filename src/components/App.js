import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Logo from '../logo192.png'

import TodoList from './TodosLists'
import EditTodo from './EditTodos'
import CreateTodo from './CreateTodos'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <a
              className='navbar-brand'
              href='https://github.com/JoseOgam'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={Logo}
                width='30'
                height='30'
                alt='CodingTheSmartWay.com'
              />
            </a>
            <Link to='/' className='navbar-brand'>
              MERN-Stack Todo App
            </Link>
            <div className='collpase navbar-collapse'>
              <ul className='navbar-nav mr-auto'>
                <li className='navbar-item'>
                  <Link to='/' className='nav-link'>
                    TodosList
                  </Link>
                </li>
                <li className='navbar-item'>
                  <Link to='/create' className='nav-link'>
                    Create Todo
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <Route path='/' exact component={TodoList} />
          <Route path='/edit/:id' component={EditTodo} />
          <Route path='/create' component={CreateTodo} />
        </div>
      </Router>
    )
  }
}
export default App
