import React, { DragEvent } from "react"
import styled from "styled-components"
import { useDispatch } from 'react-redux'
import { SquareColor, SquareStateType } from '../features/types'
import { dragStart } from '../features/drag'
import Piece from './piece'

const WHITE = 'white'
const BLACK = '#4e322b'
interface TheSquareProps {
  color: SquareColor
  mooving: boolean
}
const TheSquare = styled.div<TheSquareProps>`
  background-color: ${({ color }) => color === SquareColor.White ? WHITE : BLACK};
  color: ${({ color }) => color === SquareColor.White ? 'black' : 'white'};
  display: flex;
  justify-content: center;
  align-items: center;
  &>div {
    filter: ${({ mooving }) => mooving ? 'opacity(0.3)' : ''} drop-shadow(0 0 ${({ mooving }) => mooving ? '1' : '12'}px ${({ color }) =>
    color === SquareColor.White ? 'rgba(0,0,0, 0.5)' : 'rgba(255,255,255, 0.5)'
  })
  }
`
export interface SquareProps {
  color: SquareColor
  piece: SquareStateType
}
const Square: React.FC<SquareProps> = ({ color, piece }) => {
  // const dispatch = useDispatch()

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
    <TheSquare color={color} mooving={false}>
      <div>
        <Piece kind={piece} />
      </div>
    </TheSquare>
  )
}

export default Square