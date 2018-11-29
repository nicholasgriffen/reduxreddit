import React from 'react'
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap'

const CommentForm = ({ post_id, onCommentSubmit }) => (
    <Form onSubmit={ onCommentSubmit } inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input type="text" name="comment" id="comment-field" placeholder="Enter a comment here" />
        </FormGroup>
        <Button>Submit</Button>
    </Form>
)

export default CommentForm