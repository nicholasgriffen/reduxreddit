import React, { Component } from 'react'

import Nav from './Nav'
import VotablePost from '../containers/VotablePost'

export class App extends Component {

  render() {
    return (
      <div>
        <Nav />
        <VotablePost />
      </div>
    )
  }
}

export default App
