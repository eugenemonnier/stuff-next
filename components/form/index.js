import React from 'react'

export default class StuffForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { name: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    const newItem = event.target.value
    this.setState({ name: newItem })
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.onStuffCreate(this.state)
    this.setState({ name: '' })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            name='stuff-name'
            type='text'
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
      </form>
    )
  }
}
