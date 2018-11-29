import { connect } from 'react-redux'
import Main from '../components/Main'

const mapStateToProps = state => ({
    posts: state.posts,
    comments: state.comments
})

export default connect(
    mapStateToProps,
)(Main)