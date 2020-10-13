import { BP } from '../types'
import { getSquareColor } from '../board'

describe('Features/Play', () => {
    it('calculates the right square color', () => {
        expect(getSquareColor('a1')).toEqual('black')
        expect(getSquareColor('a2')).toEqual('white')
        expect(getSquareColor('d1')).toEqual('white')
        expect(getSquareColor('e4')).toEqual('white')
        expect(getSquareColor('d8')).toEqual('black')
    })
    it('checks types', () => {
        expect(typeof BP).toEqual('e1')
    })
})