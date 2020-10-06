import React from "react"
import styled from "styled-components"
import Square from './square'
import { useDispatch } from 'react-redux'
import { BP } from '../features/types'
import { move } from "../features/play"

const TheBoard = styled.section`
  width: 90vmin;
  height: 90vmin;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  transform: scaleY(-1);
`

const Board: React.FC = () => {
  const dispatch = useDispatch()
  return (
    <>
    <TheBoard>
      {Array.apply(null, {length: 64}).map((n: null, i: BP) => (
        <Square key={i} pos={i} />
      ))}
    </TheBoard>
    <button onClick={() => dispatch(move({from: 'e2', to: 'e4', piece: '♙'}))}>Move!</button>
    </>
  )
}


export default Board