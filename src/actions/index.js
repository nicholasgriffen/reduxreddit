import { UPVOTE, DOWNVOTE, NEW_COMMENT } from './constants'

export const upvotePost = id => ({
    type: UPVOTE,
    id
})

export const downvotePost = id => ({
    type: DOWNVOTE,
    id
})

export const submitComment = (post_id, content) => ({
    type: NEW_COMMENT,
    post_id, 
    content
})