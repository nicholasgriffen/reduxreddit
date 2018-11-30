export function PostDateString(createdAt) {
    const secondsAgo = ((Date.now() - createdAt.getTime()) / 1000)
    const hours = padSingleDigits(convertHours(createdAt))
    const minutes = padSingleDigits(createdAt.getMinutes())
    const AMPM = createdAt.getHours() < 11 ? 'AM':'PM'

    if (secondsAgo < 10) {
        return `a few seconds ago`
    } else if (secondsAgo < 60) {
        return `${parseInt(secondsAgo, 10)} seconds ago`
    } else if (secondsAgo < (24 * 3600)) {
        return `${hours}:${minutes}${AMPM}`
    } else if (secondsAgo < (48 * 3600)){
        return `Yesterday at ${hours}:${minutes}${AMPM}`
    } else {
        const month = padSingleDigits(createdAt.getMonth() + 1)  
        const day = padSingleDigits(createdAt.getDate())
        const formattedDate = `${month}/${day}/${createdAt.getFullYear()}`

        return `${formattedDate} ${hours}:${minutes}${AMPM}`
    }
}

export function padSingleDigits(num) {
    return (num < 10 ? `0${num}` : num) 
}

export function convertHours(date) {
    const militaryHours = date.getHours() + 1
    const commonHours = militaryHours > 12 ? militaryHours - 12 : militaryHours
    return commonHours
}