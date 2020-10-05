import React from "react"
import styled from "styled-components"
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import {BP, BPType, SquareColor, getSquareColor} from '../features/board'


const TheSquare = styled.div<{ color: SquareColor }>`
  background-color: ${({ color }) => color};
  color: ${({ color }) => color === SquareColor.White ? 'black' : 'white'};
  display: flex;
  justify-content: center;
  align-items: center;
`
// background-color: ${({ hi, vi }) => ;

const Square: React.FC<{pos: BP}> = ({ pos }) => {
  const squareName = BP[pos] as BPType
  const squareValue = useSelector((state: RootState) => state.play[squareName])
  const squareColor = getSquareColor(pos)
  return (
    <TheSquare color={squareColor}>{squareValue}</TheSquare>
  )
}

export default Square