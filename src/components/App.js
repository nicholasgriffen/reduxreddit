import React, { Component } from 'react'

import Nav from './Nav'
import InteractivePost from '../containers/InteractivePost'

export class App extends Component {

  render() {
    return (
      <div>
        <Nav />
        <InteractivePost />
      </div>
    )
  }
}

export default App
