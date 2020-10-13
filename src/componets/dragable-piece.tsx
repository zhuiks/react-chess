import React, { useEffect } from 'react'
import { getEmptyImage } from 'react-dnd-html5-backend'
import { useDrag } from 'react-dnd'
import styled from 'styled-components'
import { SquareColor, SquareStateType, DragTypes, BPType } from '../features/types'
import Piece from './piece'
import { getSquareColor } from '../features/board'


interface PieceStyleProps {
  bgColor: SquareColor
  isDragging: boolean
}
const ThePiece = styled.div<PieceStyleProps>`
  filter: ${({ isDragging }) => isDragging ? 'opacity(0.3)' : ''} drop-shadow(0 0 ${({ isDragging }) => isDragging ? '1' : '12'}px ${({ bgColor }) =>
  bgColor === SquareColor.White ? 'rgba(0,0,0, 0.5)' : 'rgba(255,255,255, 0.5)'})
`

interface PieceProps { 
  kind: SquareStateType
  currentPos: BPType
}

const DragablePiece: React.FC<PieceProps> = ({ kind, currentPos }) => {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { 
      type: DragTypes.PIECE, 
      piece: kind,
      from: currentPos,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  })

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })
  }, [])

  if(!kind) {
    return null
  }  
  return <ThePiece ref={drag} isDragging={isDragging} bgColor={getSquareColor(currentPos)}>
    <Piece kind={kind} />
  </ThePiece>

}
export default DragablePiece