import React from "react"
import styled from "styled-components"
import SmartSquare from './square'
import { BP, BPType, SquareStateType } from '../features/types'
import DragedPiece from './draged-piece'

const TheBoard = styled.section`
  width: 90vmin;
  height: 90vmin;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  transform: scaleY(-1);
`

const Board: React.FC = () => (
  <>
    <TheBoard>
      {Array.apply(null, { length: 64 }).map((n: null, i: BP) => (
        <SmartSquare key={i} pos={BP[i] as BPType} />
      ))}
      <DragedPiece />
    </TheBoard>
  </>
)


export default Board