import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BoardState, INITIAL_SET, MoveType } from './board'
// const setTheBoard = ()
// const initialState: SquareStateType[][] = 


const playSlice = createSlice({
  name: 'play',
  initialState: INITIAL_SET as BoardState,
  reducers: {
    move(state, action: PayloadAction<MoveType>) {
      state[action.payload.from] = null
      state[action.payload.to] = action.payload.piece
    }
  }
})

export const { move } = playSlice.actions
export default playSlice.reducer