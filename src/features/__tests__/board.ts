import { BP } from '../types'
import { getHI, getSquareColor, getVI, isWhitePiece } from '../board'

describe('Features/Board Functions', () => {
    it('calculates the right square color', () => {
        expect(getSquareColor('a1')).toEqual('black')
        expect(getSquareColor('a2')).toEqual('white')
        expect(getSquareColor('d1')).toEqual('white')
        expect(getSquareColor('e4')).toEqual('white')
        expect(getSquareColor('d8')).toEqual('black')
    })
    it('checks types', () => {
        expect(BP[4]).toEqual('e1')
    })
    it('checks if the piece is white', () => {
        expect(isWhitePiece('♘')).toEqual(true)
        expect(isWhitePiece('♚')).toEqual(false)
    })
    it('calculates vertical index', () => {
        expect(getVI('h2')).toEqual(1)
    })
})