import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { useDragLayer, XYCoord } from 'react-dnd'
import Piece from './piece'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  pointer-events: none;
`
const StyledDrag = styled.div<{ offset: XYCoord }>`
  position: absolute;
  bottom: ${({ offset }) => offset.y}px;
  left: ${({ offset }) => offset.x}px;
  transform: rotate(10deg);
`
const zeroOffset:XYCoord = {
  x: 0,
  y: 0
}
const DragedPiece: React.FC = () => {
  const {
    itemType,
    isDragging,
    item,
    initialOffset,
    currentOffset,
  } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }))
  const [offset, setOffset] = useState(zeroOffset)
  const overlayRef = useCallback(node => {
    if (node !== null && currentOffset !== null) {
      const boardRect = node.getBoundingClientRect()
      console.log(`Drag: (${currentOffset.x}, ${currentOffset.y})`)
      setOffset({
        x: currentOffset.x - boardRect.left, 
        y: currentOffset.y - boardRect.top
      })
    }
  }, [currentOffset])

  if (!isDragging || !item.piece) {
    return null
  }

  return <Overlay ref={overlayRef}>
    <StyledDrag offset={offset}>
      <Piece kind={item.piece} />
    </StyledDrag>
  </Overlay>
}

export default DragedPiece