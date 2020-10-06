import { BP } from '../types'
import { getSquareColor } from '../board'

describe('Features/Play', () => {
    it('calculates the right square color', () => {
        expect(getSquareColor(BP.a1)).toEqual('black')
        expect(getSquareColor(BP.a2)).toEqual('white')
        expect(getSquareColor(BP.d1)).toEqual('white')
        expect(getSquareColor(BP.e4)).toEqual('white')
        expect(getSquareColor(BP.d8)).toEqual('black')
    })
    it('checks types', () => {
        expect(typeof BP).toEqual('e1')
    })
})