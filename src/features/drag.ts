import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BPType, MoveStart } from './types'

const initialState: MoveStart = {
  from: null,
  piece: null,
}

const dragSlice = createSlice({
  name: 'drag',
  initialState,
  reducers: {
    dragStart(state, action: PayloadAction<MoveStart>) {
      state.from = action.payload.from
      state.piece = action.payload.piece
    },
    dragEnter(state, action: PayloadAction<BPType>) {

    },
    dragOver(state, action: PayloadAction<BPType>) {

    },
    drop(state) {

    }
  }
})

export const { dragStart, dragOver, drop } = dragSlice.actions 
export default dragSlice.reducer