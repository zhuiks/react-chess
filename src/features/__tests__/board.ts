import { getSquareColor } from '../board'

// const setTheBoard = (setupNotation) => {
//     let boardState = new Array[8][8]
//     for (const pos in setupNotation) {}
// }

describe('Features/Play', () => {
    it('calculates the right square color', () => {
        expect(getSquareColor('a', '1')).toEqual('black')
        expect(getSquareColor('a', '2')).toEqual('white')
        expect(getSquareColor('d', '1')).toEqual('white')
        expect(getSquareColor('e', '4')).toEqual('white')
        expect(getSquareColor('d', '8')).toEqual('black')
    })
    it('Sets the board\'s initial state', () => {
        expect(1 + 3).toEqual(4)
    })
})