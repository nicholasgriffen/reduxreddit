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
        const AMPM = oneHourAgo.getHours() < 11 ? 'AM':'PM'
        
        expect(PostDateString(oneHourAgo)).toBe(`${hours}:${minutes}${AMPM}`)
    })

    it('returns Yesterday at hours:minutes for dates < 48 hours old', () => {
        const oneDayOneHourAgo = new Date(Date.now() - (3600000 + 3600000 * 24))
        const hours = padSingleDigits(convertHours(oneDayOneHourAgo))
        const minutes  = padSingleDigits(oneDayOneHourAgo.getMinutes())
        const AMPM = oneDayOneHourAgo.getHours() < 11 ? 'AM':'PM'
        
        expect(PostDateString(oneDayOneHourAgo)).toBe(`Yesterday at ${hours}:${minutes}${AMPM}`)
    })

    it('returns mm/dd/yyyy hours:minutes for dates > 48 hours old', () => {
        const twoDaysAgo = new Date(Date.now() - 3600000 * 48)
        const month = padSingleDigits(twoDaysAgo.getMonth() + 1)  
        const day = padSingleDigits(twoDaysAgo.getDate())
        const hours = padSingleDigits(convertHours(twoDaysAgo))
        const minutes = padSingleDigits(twoDaysAgo.getMinutes())
        const AMPM = twoDaysAgo.getHours() < 11 ? 'AM':'PM'

        const formattedDate = `${month}/${day}/${twoDaysAgo.getFullYear()}`
        const formattedString = `${formattedDate} ${hours}:${minutes}${AMPM}`
        
        expect(PostDateString(twoDaysAgo)).toBe(formattedString)
    })
})
    