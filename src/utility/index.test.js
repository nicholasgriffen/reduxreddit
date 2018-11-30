import { PostDateString, padSingleDigits, convertHours } from './'

describe('#PostDateString', () => {
    
    it('returns a "few seconds ago" for dates < 10 seconds old', () => {
        const now = new Date()
        
        expect(PostDateString(now)).toBe(`a few seconds ago`)
    })

    it('returns number of seconds for dates < 60 seconds old', () => {
        const tenSecondsAgo = new Date(Date.now() - 10000)
        
        expect(PostDateString(tenSecondsAgo)).toBe(`10 seconds ago`)
    })
    
    it('returns hours:minutes for dates < 24 hours old', () => {
        const oneHourAgo = new Date(Date.now() - 3600000)
        const hours = padSingleDigits(convertHours(oneHourAgo))
        const minutes  = padSingleDigits(oneHourAgo.getMinutes())
        
        expect(PostDateString(oneHourAgo)).toBe(`${hours}:${minutes}`)
    })

    it('returns mm/dd/yyyy hours:minutes for dates > 48 hours old', () => {
        const oneDayAgo = new Date(Date.now() - 3600000 * 24)
        const month = padSingleDigits(oneDayAgo.getMonth() + 1)  
        const day = padSingleDigits(oneDayAgo.getDate())
        const hours = padSingleDigits(convertHours(oneDayAgo))
        const minutes = padSingleDigits(oneDayAgo.getMinutes())

        const formattedDate = `${month}/${day}/${oneDayAgo.getFullYear()}`
        const formattedString = `${formattedDate} ${hours}:${minutes}`
        
        expect(PostDateString(oneDayAgo)).toBe(formattedString)
    })
})
    