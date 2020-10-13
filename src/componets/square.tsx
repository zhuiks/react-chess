import React from "react"
import styled from "styled-components"
import { useDrop } from 'react-dnd'
import { useDispatch } from 'react-redux'
import { BP, BPType, DragTypes, SquareColor } from '../features/types'
import { getSquareColor } from "../features/board"

const WHITE = 'white'
const BLACK = '#4e322b'
interface SquareStyleProps {
  color: SquareColor
}
const TheSquare = styled.div<SquareStyleProps>`
  background-color: ${({ color }) => color === SquareColor.White ? WHITE : BLACK};
  color: ${({ color }) => color === SquareColor.White ? 'black' : 'white'};
  display: flex;
  justify-content: center;
  align-items: center;
`
const Square: React.FC<{pos: BPType}> = ({ pos, children }) => {

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: DragTypes.PIECE,
    // canDrop: () => {},
    drop: (item) => {},
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  })
  
  return (
    <TheSquare ref={drop} color={getSquareColor(pos)}>
        {children}
    </TheSquare>
  )
}

export default Square