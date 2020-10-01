import React from "react"
import styled from "styled-components"

const TheBoard = styled.section`
  width: 80vh;
  height: 80vh;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`
interface SquareProps {
  readonly hi: number;
  readonly vi: number;
}
const TheSquare = styled.div<SquareProps>`
  background-color: ${({hi, vi}) => (hi + vi) % 2 === 0 ? 'white' : 'black'};
  color: ${({hi, vi}) => (hi + vi) % 2 === 0 ? 'black' : 'white'};
  display: flex;
  justify-content: center;
  align-items: center;
`

const HORIZONTALS = [1,2,3,4,5,6,7,8]
const VERITCALS = ['a','b','c','d','e','f','g','h']

const Board: React.FC = () =>  (
   <TheBoard>
    {HORIZONTALS.reverse().map((horizontal, i) => (
        VERITCALS.map((vertical, j) => (
          <TheSquare key={vertical+horizontal} hi={i} vi={j}>{vertical+horizontal}</TheSquare>
        ))
    ))}
  </TheBoard>
  )


export default Board