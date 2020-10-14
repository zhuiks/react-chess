import React, { useEffect } from 'react'
import { getEmptyImage } from 'react-dnd-html5-backend'
import { useDrag } from 'react-dnd'
import styled from 'styled-components'
import { GameColor, DragTypes, BPType } from '../features/types'
import Piece from './piece'
import { getSquareColor, isWhitePiece } from '../features/board'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { moveStart } from '../features/game'


interface PieceStyleProps {
  bgColor: GameColor
  isDragging: boolean
}
const ThePiece = styled.div<PieceStyleProps>`
  filter: ${({ isDragging }) => isDragging ? 'opacity(0.3)' : ''} drop-shadow(0 0 ${({ isDragging }) => isDragging ? '1' : '12'}px ${({ bgColor }) =>
  bgColor === GameColor.White ? 'rgba(0,0,0, 0.5)' : 'rgba(255,255,255, 0.5)'})
`

interface PieceProps { 
  currentPos: BPType
}

const DragablePiece: React.FC<PieceProps> = ({ currentPos }) => {
  const piece = useSelector((state: RootState) => state.game.set[currentPos])
  const turn = useSelector((state: RootState) => state.game.turn)
  const dispatch = useDispatch()

  const [{ isDragging }, drag, preview] = useDrag({
    item: { 
      type: DragTypes.PIECE, 
      piece,
      from: currentPos,
    },
    begin: () => {
      if(piece) {
        dispatch(moveStart({piece, from: currentPos}))
      }
    },
    canDrag: () => piece !== null && (isWhitePiece(piece) && turn === GameColor.White || !isWhitePiece(piece) && turn === GameColor.Black),
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  })

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })
  }, [])

  if(!piece) {
    return null
  }  
  return <ThePiece ref={drag} isDragging={isDragging} bgColor={getSquareColor(currentPos)}>
    <Piece kind={piece} />
  </ThePiece>

}
export default DragablePiece