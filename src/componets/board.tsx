import React from "react"
import styled from "styled-components"
import Square from './square'
import { useDispatch, useSelector } from 'react-redux'
import { BP, BPType, SquareStateType } from '../features/types'
import { move } from "../features/play"
import { RootState } from "../store"
import { getSquareColor } from "../features/board"
import DragablePiece from './dragable-piece'
import DragedPiece from './draged-piece'

const TheBoard = styled.section`
  width: 90vmin;
  height: 90vmin;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  transform: scaleY(-1);
`
interface SquareProps {
  piece: SquareStateType
  pos: BPType
}

const Board: React.FC = () => {
  const playState = useSelector((state: RootState) => state.play)
  // const draggingFrom = useSelector((state: RootState) => state.drag.from)
  const dispatch = useDispatch()
  const squares: SquareProps[] = Array.apply(null, { length: 64 }).map((n: null, i: BP) => ({
    piece: playState[BP[i] as BPType],
    pos: BP[i] as BPType,
  }))

  return (
    <>
      <TheBoard>
        {squares.map(({ piece, pos }, i) => (
          <Square key={i} pos={pos} >
            <DragablePiece kind={piece} currentPos={pos} />
          </Square>
        ))}
        <DragedPiece />
      </TheBoard>
      <button onClick={() => dispatch(move({ from: 'e2', to: 'e4', piece: '♙' }))}>Move!</button>
    </>
  )
}


export default Board