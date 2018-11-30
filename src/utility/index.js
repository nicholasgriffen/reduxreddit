export const PostDateString = createdAt => {
    const secondsAgo = ((Date.now() - createdAt.getTime()) / 1000)
    if (secondsAgo < 10) {
        return `a few seconds ago`
    } else if (secondsAgo < 60) {
        return `${secondsAgo} seconds ago`
    } else if (secondsAgo < (24 * 3600)) {
        return `${createdAt.getHours()}:${createdAt.getMinutes()}`
    } 
}