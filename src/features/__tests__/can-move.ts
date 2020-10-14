import canMove from '../can-move'
import { BoardState, BPType, Move, MoveStart, SquareStateType } from '../types'

const getOnePieceBoardOptions = (piece: SquareStateType, from: BPType) => {
  const set: BoardState = {
    [from]: piece
  }
  return canMove(piece, from, set)
}
describe('Features/Move Options', () => {
  describe('Pawn', ()=>{
    const piece: SquareStateType = '♙'
    it('can move two squares up', () => {
      const options = getOnePieceBoardOptions(piece, 'e2')
      expect(options).toContain('e3')
      expect(options).toContain('e4')
    })
    it('can move only one square up', () => {
      const options = getOnePieceBoardOptions(piece, 'a5')
      expect(options).toContain('a6')
      expect(options).not.toContain('a7')
    })
  })
  describe('Rook', ()=>{
    const piece: SquareStateType = '♜'
    it('can move verticaly', ()=>{
      const set: BoardState = {
        f5: '♜'
      }
      const options = getOnePieceBoardOptions(piece, 'f5')
      expect(options).toContain('f6')
      expect(options).toContain('f7')
      expect(options).toContain('f8')
      expect(options).toContain('f1')
      expect(options).toContain('f2')
      expect(options).toContain('f3')
      expect(options).toContain('f4')
      expect(options).toHaveLength(7)
    })
  })
})