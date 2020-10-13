import React from "react"
import styled from "styled-components"
import Square from './square'
import { useSelector } from 'react-redux'
import { BP, BPType, SquareStateType } from '../features/types'
import { RootState } from "../store"
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
  const gameState = useSelector((state: RootState) => state.game.set)
  const squares: SquareProps[] = Array.apply(null, { length: 64 }).map((n: null, i: BP) => ({
    piece: gameState[BP[i] as BPType],
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
    </>
  )
}


export default Board