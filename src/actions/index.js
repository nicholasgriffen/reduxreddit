import { UPVOTE } from './constants'
export const upvotePost = id => ({
    type: UPVOTE,
    id
})