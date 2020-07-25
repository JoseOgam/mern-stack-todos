import React from 'react'

class CreateTodo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      description: '',
      responsible: '',
      priority: '',
      completed: false
    }
  }
  handleDescription = e => {
    this.setState(() => ({
      description: e.target.value
    }))
  }
  handleResponsible = e => {
    this.setState(() => ({
      responsible: e.target.value
    }))
  }
  handlePriority = e => {
    this.setState(() => ({
      priority: e.target.value
    }))
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(`form submitted`)
    console.log(`todo description is ${this.state.description}`)
    console.log(`todos responsible is ${this.state.responsible}`)
    console.log(`todos priority ${this.state.priority}`)

    this.setState(() => ({
      description: '',
      responsible: '',
      priority: '',
      completed: false
    }))
  }

  render () {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create New Todo</h3>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>Description: </label>
            <input type='text' className='form-control' />
          </div>
          <div className='form-group'>
            <label>Responsible: </label>
            <input type='text' className='form-control' />
          </div>
          <div className='form-group'>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='priorityOptions'
                id='priorityLow'
                value='Low'
              />
              <label className='form-check-label'>Low</label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='priorityOptions'
                id='priorityMedium'
                value='Medium'
              />
              <label className='form-check-label'>Medium</label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='priorityOptions'
                id='priorityHigh'
                value='High'
              />
              <label className='form-check-label'>High</label>
            </div>
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
