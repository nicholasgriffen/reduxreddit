import React from 'react'
import AddPostForm from './AddPostForm'
import InteractivePost from '../containers/InteractivePost'
import FilterPosts from './FilterPosts'
import { Container, Row, Col, Button } from 'reactstrap'

const Main = ({ posts, comments }) => (
      <Container className="mt-4">
        <Row>
          <Col sm={{size: 8, offset: 1}}>
            <FilterPosts />
          </Col>
          <Col sm="2">
            <Button color="secondary">Add Post</Button>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col sm={{size: 11, offset: 1}}>
            <AddPostForm />
          </Col>
        </Row>
        <Row>
          <Col className="pr-0" sm={{size: 9, offset: 1}}>
            {posts.map(post => {
              return <InteractivePost 
              key={post.id} 
              post={post}
              comments={comments.filter(comment => comment.post_id === post.id)}/>
            })}
            
          </Col>
        </Row>
      </Container>
  )

export default Main