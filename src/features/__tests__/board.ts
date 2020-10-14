import { BP, GameColor } from '../types'
import { getHI, getPieceColor, getSquareColor, getVI, isWhitePiece } from '../board'

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
    it('gets color of the piece', () => {
        expect(getPieceColor('♘')).toEqual(GameColor.White)
        expect(getPieceColor('♚')).toEqual(GameColor.Black)
    })
    it('calculates indexes correctly', () => {
        expect(getVI('h2')).toEqual(7)
        expect(getHI('h2')).toEqual(1)
    })
})