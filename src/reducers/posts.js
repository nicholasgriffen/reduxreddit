import { 
    UPVOTE, 
    DOWNVOTE 
} from '../actions/constants'

const posts = (state = [{
    id: 0,
    img_url: 'test.net', 
    title: 'My Post', 
    author: 'The Jan', 
    content: 'Digijan does it again', 
    createdAt: new Date(), 
    votes: 2
}], action) => {
    switch(action.type) {
        case UPVOTE:
            return state.map(post => {
                return (post.id === action.id)
                    ? { ...post, votes: post.votes + 1}
                    : post 
            })
        case DOWNVOTE:
            return state.map(post => {
                return (post.id === action.id)
                    ? { ...post, votes: post.votes > 0 ? post.votes - 1 : 0 }
                    : post 
            })
        default: 
            return state
    }
}

export default posts