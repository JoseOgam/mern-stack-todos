import React from 'react'

class CreateTodo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      body: '',

      completed: false
    }
  }
  handletitle = e => {
    this.setState(() => ({
      title: e.target.value
    }))
  }
  handleResponsible = e => {
    this.setState(() => ({
      body: e.target.value
    }))
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(`form submitted`)
    console.log(`todo title is ${this.state.title}`)
    console.log(`todos body is ${this.state.body}`)
    console.log(`the state of task is ${this.state.completed}`)

    this.setState(() => ({
      title: '',
      body: '',
      completed: false
    }))
  }

  render () {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create New Todo</h3>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>title: </label>
            <input
              value={this.state.title}
              onChange={e => this.setState({ title: e.target.value })}
              type='text'
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <label>body: </label>

            <textarea
              value={this.state.body}
              onChange={e => this.setState({ body: e.target.value })}
              type='text'
              className='form-control'
            />
          </div>

          <div className='form-group'>
            <input
              type='submit'
              value='Create Todo'
              className='btn btn-primary'
            />
          </div>
        </form>
      </div>
    )
  }
}
export default CreateTodo
