import React, { DragEvent } from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { BP, BPType, SquareColor } from '../features/types'
import { getSquareColor } from '../features/board'
import { dragStart } from '../features/drag'
import Piece from './piece'


interface TheSquareProps {
  color: SquareColor
  mooving: boolean
}
const TheSquare = styled.div<TheSquareProps>`
  background-color: ${({ color }) => color === SquareColor.White ? 'white' : '#4e322b'};
  color: ${({ color }) => color === SquareColor.White ? 'black' : 'white'};
  display: flex;
  justify-content: center;
  align-items: center;
  & path {
    filter: ${({ mooving }) => mooving ? 'opacity(0.3)' : ''} drop-shadow(0 0 ${({ mooving }) => mooving ? '1' : '12'}px ${({ color }) =>
    color === SquareColor.White ? 'rgba(0,0,0, 0.5)' : 'rgba(255,255,255, 0.5)'
  })
  }
`
const Square: React.FC<{ pos: BP }> = ({ pos }) => {
  const squareName = BP[pos] as BPType
  const squareValue = useSelector((state: RootState) => state.play[squareName])
  const draggingFrom = useSelector((state: RootState) => state.drag.from)
  // const dispatch = useDispatch()
  

  const squareColor = getSquareColor(pos)
  // const onDragStart = piece ? (
  //   (event: DragEvent<HTMLDivElement>) => {
  //     const svg = event.currentTarget.children[0]
  //     event.dataTransfer.setDragImage(svg, 0, 0)
  //     dispatch(dragStart({
  //       from: BP[pos] as BPType,
  //       piece: squareValue
  //     }))
  //   })
  //   : null

  return (
    <TheSquare color={squareColor} mooving={draggingFrom === BP[pos]}>
      <Piece kind={squareValue} />
    </TheSquare>
  )
}

export default Square