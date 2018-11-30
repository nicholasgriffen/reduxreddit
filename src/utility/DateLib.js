/* 
    FormatDateString is used in Post.js. It takes a Date,
    performs various calculations based on the current date, 
    and returns a different string depending on whether the post
    was created < 10 seconds, < one minute, yesterday, today, or more than 1 day ago  
*/
export function FormatDateString(date) {
    const secondsAgo = ((Date.now() - date.getTime()) / 1000)
    const hours = padSingleDigits(convertHours(date))
    const minutes = padSingleDigits(date.getMinutes())
    const AMPM = date.getHours() < 11 ? 'AM':'PM'
    //getDate returns a number representing the calendar day of the date
    const createdYesterday = (new Date()).getDate() - 1 === date.getDate()

    if (secondsAgo < 10) {
        return `a few seconds ago`
    } else if (secondsAgo < 60) {
        return `${parseInt(secondsAgo, 10)} seconds ago`
    } else if (createdYesterday) {
        return `Yesterday at ${hours}:${minutes}${AMPM}`
    } else if (secondsAgo < (24 * 3600)) {
        return `${hours}:${minutes}${AMPM}`
    } else {
        //date is more than 1 day old, return a string with mm/dd/yyyy
        const month = padSingleDigits(date.getMonth() + 1)  
        const day = padSingleDigits(date.getDate())
        const formattedDate = `${month}/${day}/${date.getFullYear()}`

        return `${formattedDate} ${hours}:${minutes}${AMPM}`
    }
}

export function padSingleDigits(num) {
    return (num < 10 ? `0${num}` : num) 
}

// convertHours takes a date and converts the hours from 24-hour format to 12-hour format 
export function convertHours(date) {
    const militaryHours = date.getHours() + 1
    return militaryHours > 12 ? militaryHours - 12 : militaryHours
}