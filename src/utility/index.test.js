import { PostDateString } from './'

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
        expect(PostDateString(oneHourAgo)).toBe(`${oneHourAgo.getHours()}:${oneHourAgo.getMinutes()}`)
    })
})
    