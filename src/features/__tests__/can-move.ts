import { getPieceColor } from '../board'
import canMove from '../can-move'
import { BoardState, BPType, Move, MoveStart, SquareStateType } from '../types'

const getMoveOptions = (piece: SquareStateType, from: BPType, additionalPieces: BoardState = {}) => {
  const set: BoardState = {
    ...additionalPieces,
    [from]: piece
  }
  return canMove(piece, from, set)
}
describe('Features/Move Options', () => {
  it('checks for capture', () => {
    const set: BoardState = {
      e4: '♗'
    }
    expect(getPieceColor(set.e4) && getPieceColor(set.e4) !== getPieceColor('♛')).toEqual(true)
    expect(getPieceColor(set.e4) && getPieceColor(set.e4) !== getPieceColor('♖')).toEqual(false)
  })
  describe('Pawn', () => {
    const piece: SquareStateType = '♙'
    it('can move two squares up', () => {
      const options = getMoveOptions(piece, 'e2')
      expect(options).toContain('e3')
      expect(options).toContain('e4')
    })
    it('can move only one square up', () => {
      const options = getMoveOptions(piece, 'a5')
      expect(options).toContain('a6')
      expect(options).not.toContain('a7')
    })
  })
  describe('Rook', () => {
    const piece: SquareStateType = '♜'
    it('can move verticaly and horizontaly', () => {
      const options = getMoveOptions(piece, 'c2')
      expect(options).toContain('c3')
      expect(options).toContain('c4')
      expect(options).toContain('c5')
      expect(options).toContain('c6')
      expect(options).toContain('c7')
      expect(options).toContain('c8')
      expect(options).toContain('c1')

      expect(options).toContain('d2')
      expect(options).toContain('e2')
      expect(options).toContain('f2')
      expect(options).toContain('g2')
      expect(options).toContain('h2')
      expect(options).toContain('b2')
      expect(options).toContain('a2')
      expect(options).toHaveLength(14)
    })
    it('will not move if other piece in the way', () => {
      const options = getMoveOptions(piece, 'd6', {
        a6: '♟︎',
        d8: '♛',
        f6: '♙',
        d3: '♗',
      })
      expect(options).toContain('d7')
      expect(options).not.toContain('d8')
      expect(options).toContain('c6')
      expect(options).not.toContain('a6')
      expect(options).toContain('d3')
      expect(options).not.toContain('d2')
      expect(options).not.toContain('d1')
      expect(options).toContain('f6')
      expect(options).not.toContain('g6')
    })
  })
  describe('Bishop', () => {
    const piece: SquareStateType = '♗'
    it('can move diagonaly', () => {
      const options = getMoveOptions(piece, 'f2')
      expect(options).toContain('e1')
      expect(options).toContain('g3')
      expect(options).toContain('h4')
      expect(options).not.toContain('a6')
      expect(options).not.toContain('d2')

      expect(options).toContain('e3')
      expect(options).toContain('a7')
      expect(options).toContain('g1')
      expect(options).toHaveLength(9)
    })
  })
  describe('King', () => {
    const piece: SquareStateType = '♔'
    it('can move in all directions', () => {
      const options = getMoveOptions(piece, 'e4')
      expect(options).toContain('e5')
      expect(options).toContain('e3')
      expect(options).toContain('f4')
      expect(options).toContain('d4')

      expect(options).toContain('f5')
      expect(options).toContain('d3')
      expect(options).toContain('d5')
      expect(options).toContain('f3')

      expect(options).toHaveLength(8)
    })
  })
  describe('Knight', () => {
    const piece: SquareStateType = '♞'
    it('can jump in all directions', () => {
      const options = getMoveOptions(piece, 'e4')
      expect(options).toContain('f6')
      expect(options).toContain('d6')

      expect(options).toContain('f2')
      expect(options).toContain('d2')

      expect(options).toContain('g5')
      expect(options).toContain('c5')

      expect(options).toContain('g3')
      expect(options).toContain('c3')
    })
  })
})