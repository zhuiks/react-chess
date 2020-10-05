import React from "react"
import styled from "styled-components"
import { useSelector } from 'react-redux'
import {HORIZONTALS, VERITCALS, Horizontals, Verticals} from '../features/play'

enum SquareColor {
  White = 'white',
  Black = 'black',
}

const getSquareColor = (h: Horizontals, v: Verticals): SquareColor => {
  const hi = HORIZONTALS.indexOf(h)
  const vi = VERITCALS.indexOf(v)
  return (hi + vi) % 2 === 0 ? SquareColor.White : SquareColor.Black
}

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
  const squareValue = useSelector(state => state.play[h][v])
  const squareColor = getSquareColor(h, v)
  return (
    <TheSquare color={squareColor}>{squareValue}</TheSquare>
  )
}

export default Square