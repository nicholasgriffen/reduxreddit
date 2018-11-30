import { connect } from 'react-redux'

import Post from '../components/Post'
import { 
    upvotePost, 
    downvotePost 
} from '../actions'


const mapDispatchToProps = (dispatch, ownProps) => ({
    onUpvoteClick: () => dispatch(upvotePost(ownProps.post.id)),
    onDownvoteClick: () => dispatch(downvotePost(ownProps.post.id))
})

export default connect(
    null, 
    mapDispatchToProps
)(Post)