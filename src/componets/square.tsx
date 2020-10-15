import React from "react"
import styled from "styled-components"
import { useDrop } from 'react-dnd'
import { useDispatch, useSelector } from 'react-redux'
import { BPType, DragTypes, GameColor } from '../features/types'
import { move } from "../features/game"
import { getSquareColor } from "../features/board"
import { RootState } from "../store"
import DragablePiece from "./dragable-piece"

const WHITE = 'white'
const BLACK = '#4e322b'
const GREEN = '#8de303d6'
const RED = '#e30303a8'

interface SquareStyleProps {
  color: GameColor
  highlight: typeof GREEN | typeof RED | 'none'
}
const TheSquare = styled.div<SquareStyleProps>`
  background-color: ${({ color }) => color === GameColor.White ? WHITE : BLACK};
  color: ${({ color }) => color === GameColor.White ? 'black' : 'white'};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${ ({ highlight }) => highlight === 'none' ? 'none' : `inset 0 0 30px ${highlight}`};
`
const SmartSquare: React.FC<{ pos: BPType }> = ({ pos }) => {
  const moveOptions = useSelector((state: RootState) => state.game.moveOptions)
  const dispatch = useDispatch()
  const [{ isOver, canDrop, dragItem }, drop] = useDrop({
    accept: DragTypes.PIECE,
    canDrop: () => moveOptions.includes(pos),
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
      dragItem: monitor.getItem(),
    }),
  })
  const highlight = dragItem && dragItem.from !== pos && moveOptions.includes(pos) ? GREEN : isOver && !canDrop ? RED : 'none'
  return (
    <TheSquare ref={drop} color={getSquareColor(pos)} highlight={highlight}>
      <DragablePiece currentPos={pos} />
    </TheSquare>
  )
}

export default SmartSquare