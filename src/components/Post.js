// wrapped in containers/InteractivePost.js
import React from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col
} from 'reactstrap'

// comment submission form
import PostComment from '../containers/PostComment'

import { FormatDateString } from '../utility/DateLib'

import FaArrowUp from 'react-icons/lib/fa/arrow-up'
import FaArrowDown from 'react-icons/lib/fa/arrow-down'
import FaComment from 'react-icons/lib/fa/comment'

const Post = ({ 
  post: { 
    img_url, 
    title, 
    votes, 
    author, 
    content, 
    createdAt,
    id },
    comments,
    onUpvoteClick,
    onDownvoteClick
  }) => {
  return (
    <Row className="mt-3">
      <Col>
        <Card>
          <CardImg
            top
            width="100%"
            src={ img_url }
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{ title } | <FaArrowUp onClick={ onUpvoteClick }/> { votes } <FaArrowDown onClick={ onDownvoteClick }/></CardTitle>
            <CardSubtitle>{ author }</CardSubtitle>
            <CardText>
              { content }
            </CardText>
              <hr />{`id: ${id} `  } |
              {` ${FormatDateString(createdAt)} `} | <FaComment /> { ` ${comments.length} comment${(!comments.length || comments.length > 1) ? 's' : ''}` }
              <PostComment post_id={id}/>
              <ul className="mt-2">
                { comments.map(comment => (
                    <li key={ comment.id }>{ comment.content }</li>
                ))}
              </ul>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default Post
