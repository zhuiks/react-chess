import React from "react"
import styled from "styled-components"
import { useDrop } from 'react-dnd'
import { useDispatch } from 'react-redux'
import { BPType, DragTypes, GameColor } from '../features/types'
import { move } from "../features/game"
import { getSquareColor } from "../features/board"

const WHITE = 'white'
const BLACK = '#4e322b'
interface SquareStyleProps {
  color: GameColor
}
const TheSquare = styled.div<SquareStyleProps>`
  background-color: ${({ color }) => color === GameColor.White ? WHITE : BLACK};
  color: ${({ color }) => color === GameColor.White ? 'black' : 'white'};
  display: flex;
  justify-content: center;
  align-items: center;
`
const Square: React.FC<{pos: BPType}> = ({ pos, children }) => {
  const dispatch = useDispatch()

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: DragTypes.PIECE,
    // canDrop: () => {},
    drop: (item: any) => {
      console.log('trying to drop')
      const res = {
        piece: item.piece,
        from: item.from,
        to: pos,
      }
      dispatch(move(res))
      return res
    },
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