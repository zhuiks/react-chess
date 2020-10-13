import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { INITIAL_SET } from './board'
import { BoardState, GameColor, Move } from './types'
// const setTheBoard = ()
// const initialState: SquareStateType[][] = 


const gameSlice = createSlice({
  name: 'game',
  initialState: {
    set: INITIAL_SET as BoardState,
    turn: GameColor.White,
  },
  reducers: {
    move(state, action: PayloadAction<Move>) {
      state.set[action.payload.from] = null
      state.set[action.payload.to] = action.payload.piece
      state.turn = state.turn === GameColor.White ? GameColor.Black : GameColor.White
    }
  }
})

export const { move } = gameSlice.actions
export default gameSlice.reducer