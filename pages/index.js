import React from 'react'
import axios from 'axios'

import Nav from '../components/nav'
import Item from '../components/item'
import StuffForm from '../components/form'
import styles from '../components/sass/indexPage.module.scss'

const url = 'https://my-stuff-api.herokuapp.com/api/v1/stuff/'

export default class Home extends React.Component {
  constructor (props) {
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
      <div className='container' className={styles.indexpage}>
        <Nav />
        <h1>My Stuff</h1>
        <ul className={styles.listitems}>
          {this.state.stuff.map(stuff => <Item key={stuff.id} stuff={stuff} />)}
        </ul>
        <StuffForm onStuffCreate={this.stuffCreateHandler} />

        <style jsx global>{`
                html,
                body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                }
                * {
                box-sizing: border-box;
                }
            `}
        </style>
      </div>
    )
  }
}

export async function getStaticProps () {
  const response = await fetch(url)
  const stuff = await response.json()
  return { props: { stuff: stuff } }
}
