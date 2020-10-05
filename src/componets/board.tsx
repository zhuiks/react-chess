import React from "react"
import styled from "styled-components"
import Square from './square'
import {HORIZONTALS, VERITCALS} from '../features/board'

const TheBoard = styled.section`
  width: 90vw;
  height: 90vw;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`

const Board: React.FC = () => (
  <TheBoard>
    {[...HORIZONTALS].reverse().map((horizontal) => (
      VERITCALS.map((vertical) => (
        <Square key={vertical + horizontal} h={horizontal} v={vertical} />
      ))
    ))}
  </TheBoard>
)


export default Board