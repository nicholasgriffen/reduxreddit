import React from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'
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
    createdAt }
  }, comments) => {
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
            <CardTitle>{ title } | <FaArrowUp /> { votes } <FaArrowDown /></CardTitle>
            <CardSubtitle>{ author }</CardSubtitle>
            <CardText>
              { content }
            </CardText>
              <hr />
              {/*a few seconds ago*/ createdAt} | <FaComment /> { comments.length }
              <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Input type="text" name="comment" id="comment-field" placeholder="Enter a comment here" />
                </FormGroup>
                <Button>Submit</Button>
              </Form>
              <ul className="mt-2">
                { comments.map((comment, idx) => (<li key={idx}>{comment}</li>)) }
              </ul>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default Post
