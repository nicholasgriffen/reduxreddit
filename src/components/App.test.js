import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

import App from './App'

const postsData = [{
  img_url: 'img.com', 
    title: 'Test Suite', 
    votes: '10', 
    author: 'The Jan', 
    content: 'Can digijan sustain this level of growth?', 
    createdAt: new Date(Date.now() - 3600000),
    id: 0 
}]

const commentsData = [{
  post_id: 0,
  id: 0,
  content: 'This level of growth is not sustainable'
}]

const store = configureMockStore()({
  posts: postsData,
  comments: commentsData
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, 
    div)
  ReactDOM.unmountComponentAtNode(div)
})
