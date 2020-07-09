import React from 'react'
import axios from 'axios'

import Head from 'next/head'

const url = 'https://my-stuff-api.herokuapp.com/api/v1/stuff/'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { stuff: props.stuff }
  }

  async stuffCreateHandler (stuff) {
    const response = await axios.post(url, stuff)
    const updateStuff = this.state.stuff.concat(response.data)
    this.setState({ stuff: updateStuff })
  }

  render () {
    return (
      <div className='container'>
        <h1>My Stuff</h1>
        <ul>
          {/* {this.state.stuff.map(stuff ->)} */}
        </ul>
      </div>
    )
  }
}
