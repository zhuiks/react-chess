import React from "react"
import styled from "styled-components"
import { useSelector } from 'react-redux'
import {HORIZONTALS, VERITCALS, Horizontals, Verticals, SquareColor, getSquareColor} from '../features/board'


const TheSquare = styled.div<{ color: SquareColor }>`
  background-color: ${({ color }) => color};
  color: ${({ color }) => color === SquareColor.White ? 'black' : 'white'};
  display: flex;
  justify-content: center;
  align-items: center;
`
// background-color: ${({ hi, vi }) => ;

interface SquareProps {
  h: Horizontals
  v: Verticals
}
const Square: React.FC<SquareProps> = ({ h, v }) => {
  //const squareValue = useSelector(state => state.play[h][v])
  const squareColor = getSquareColor(v, h)
  return (
    <TheSquare color={squareColor}>{v+h}</TheSquare>
  )
}

export default Square