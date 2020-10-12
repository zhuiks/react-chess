import React from "react"
import styled from "styled-components"
import Square from './square'
import { useDispatch, useSelector } from 'react-redux'
import { BP, BPType, SquareColor, SquareStateType } from '../features/types'
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
  color: SquareColor
  piece: SquareStateType
  pos: BPType
}

const Board: React.FC = () => {
  const playState = useSelector((state: RootState) => state.play)
  // const draggingFrom = useSelector((state: RootState) => state.drag.from)
  const dispatch = useDispatch()
  const squares: SquareProps[] = Array.apply(null, { length: 64 }).map((n: null, i: BP) => ({
    piece: playState[BP[i] as BPType],
    color: getSquareColor(i),
    pos: BP[i] as BPType,
  }))

  return (
    <>
      <TheBoard>
        {squares.map(({ piece, pos, color }, i) => (
          <Square key={i} color={color} >
            <DragablePiece kind={piece} currentPos={pos} bgColor={color} />
          </Square>
        ))}
        <DragedPiece />
      </TheBoard>
      <button onClick={() => dispatch(move({ from: 'e2', to: 'e4', piece: '♙' }))}>Move!</button>
    </>
  )
}


export default Board