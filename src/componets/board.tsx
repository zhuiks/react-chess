import React from "react"
import styled from "styled-components"
import Square from './square'
import {HORIZONTALS, VERITCALS, BP} from '../features/board'

const TheBoard = styled.section`
  width: 90vw;
  height: 90vw;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  transform: scaleY(-1);
`

const Board: React.FC = () => (
  <TheBoard>
    {Array.apply(null, {length: 64}).map((n: null, i: BP) => (
      <Square key={i} pos={i} />
    ))}
  </TheBoard>
)


export default Board