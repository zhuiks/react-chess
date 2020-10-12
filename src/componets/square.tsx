import React, { DragEvent } from "react"
import styled from "styled-components"
import { useDispatch } from 'react-redux'
import { SquareColor } from '../features/types'

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
const Square: React.FC<{color: SquareColor}> = ({ color, children }) => {
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
    <TheSquare color={color}>
        {children}
    </TheSquare>
  )
}

export default Square