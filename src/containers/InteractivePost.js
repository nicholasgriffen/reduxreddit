import { connect } from 'react-redux'

import Post from '../components/Post'
import { upvotePost } from '../actions'


const mapDispatchToProps = (dispatch, ownProps) => ({
    onUpvoteClick: () => dispatch(upvotePost(ownProps.post.id))
})

export default connect(
    null, 
    mapDispatchToProps
)(Post)