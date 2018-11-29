import { UPVOTE, DOWNVOTE } from './constants'

export const upvotePost = id => ({
    type: UPVOTE,
    id
})

export const downvotePost = id => ({
    type: DOWNVOTE,
    id
})
