import { FormatDateString, padSingleDigits, convertHours } from './DateLib'

describe('#FormatDateString', () => {
    
    it('returns a "few seconds ago" for dates < 10 seconds old', () => {
        const now = new Date()
        
        expect(FormatDateString(now)).toBe(`a few seconds ago`)
    })

    it('returns "${number of seconds} seconds ago" for dates < 60 seconds old', () => {
        const tenSecondsAgo = new Date(Date.now() - 10000)
        
        expect(FormatDateString(tenSecondsAgo)).toBe(`10 seconds ago`)
    })
    //TODO: this test will fail at 12AM - 12:01AM'
    it('returns "${hours}:${minutes}AM/PM" for dates < 24 hours old and not yesterday', () => {
        const oneMinuteAgo = new Date(Date.now() - 360000)
        const hours = padSingleDigits(convertHours(oneMinuteAgo))
        const minutes  = padSingleDigits(oneMinuteAgo.getMinutes())
        const AMPM = oneMinuteAgo.getHours() < 11 ? 'AM':'PM'
        
        expect(FormatDateString(oneMinuteAgo)).toBe(`${hours}:${minutes}${AMPM}`)
    })
    //TODO: this test will fail at 12AM
    it('returns "Yesterday at ${hours}:${minutes}AM/PM" for dates that are yesterday', () => {
        const oneDayOneMomentAgo = new Date(Date.now() - (3600000 * 24.01))
        const hours = padSingleDigits(convertHours(oneDayOneMomentAgo))
        const minutes  = padSingleDigits(oneDayOneMomentAgo.getMinutes())
        const AMPM = oneDayOneMomentAgo.getHours() < 11 ? 'AM':'PM'
        
        expect(FormatDateString(oneDayOneMomentAgo)).toBe(`Yesterday at ${hours}:${minutes}${AMPM}`)
    })

    it('returns "${mm/dd/yyyy} ${hours}:${minutes}AM/PM" for dates > 1 day old', () => {
        const twoDaysAgo = new Date(Date.now() - 3600000 * 48)
        const month = padSingleDigits(twoDaysAgo.getMonth() + 1)  
        const day = padSingleDigits(twoDaysAgo.getDate())
        const hours = padSingleDigits(convertHours(twoDaysAgo))
        const minutes = padSingleDigits(twoDaysAgo.getMinutes())
        const AMPM = twoDaysAgo.getHours() < 11 ? 'AM':'PM'

        const formattedDate = `${month}/${day}/${twoDaysAgo.getFullYear()}`
        const formattedString = `${formattedDate} ${hours}:${minutes}${AMPM}`
        
        expect(FormatDateString(twoDaysAgo)).toBe(formattedString)
    })
})
    