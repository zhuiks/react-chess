import canMove from '../can-move'
import { BoardState } from '../types'

describe('Features/Move Options', () => {
  describe('Pawn', ()=>{
    it('can move two squares up', () => {
      const set: BoardState = {
        e2: '♙'
      }
      const options = canMove('♙', 'e2', set)
      expect(options).toContain('e3')
      expect(options).toContain('e4')
    })
    it('can move only one square up', () => {
      const set: BoardState = {
        a5: '♙'
      }
      const options = canMove('♙', 'a5', set)
      expect(options).toContain('a6')
      expect(options).not.toContain('a7')
    })
  
  })
})