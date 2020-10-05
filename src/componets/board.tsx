import React from "react"
import styled from "styled-components"
import Square from './square'
import {HORIZONTALS, VERITCALS} from '../features/play'

const TheBoard = styled.section`
  width: 80vh;
  height: 80vh;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`

const Board: React.FC = () => (
  <TheBoard>
    {HORIZONTALS.reverse().map((horizontal, i) => (
      VERITCALS.map((vertical, j) => (
        <Square key={vertical + horizontal} h={horizontal} v={vertical} />
      ))
    ))}
  </TheBoard>
)


export default Board