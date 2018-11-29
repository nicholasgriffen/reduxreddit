import { connect } from 'react-redux'

import CommentForm from '../components/CommentForm'
import { submitComment } from '../actions'

const mapDispatchToProps = (dispatch, ownProps) => ({
    onCommentSubmit: e => {
        e.preventDefault()
        return dispatch(submitComment(ownProps.post_id, e.target[0].value))
    }
})

export default connect(
    null, 
    mapDispatchToProps
)(CommentForm)