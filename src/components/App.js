import React, { Component } from 'react'

import Nav from './Nav'
import PostsList from '../containers/PostsList'

export class App extends Component {

  render() {
    return (
      <div>
        <Nav />
        <PostsList />
      </div>
    )
  }
}

export default App
