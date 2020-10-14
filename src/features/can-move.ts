import { useSelector } from "react-redux"
import { RootState } from "../store"
import { isWhitePiece } from "./board"
import { GameState } from "./game"
import { BPType, Move, SquareStateType } from "./types"

const canMove = (piece: SquareStateType, from: BPType, to: BPType, gameState: GameState) => {
  if(piece === null) {
    return false
  }
  if(from === to) {
    return true
  }
  const toPiece: SquareStateType = gameState.set[to]
  console.log(`${piece}: ${from} -> ${to} ${toPiece}`)
  //cannot capture piece of the same color
  if(toPiece && (isWhitePiece(piece) && isWhitePiece(toPiece) || !isWhitePiece(piece) && !isWhitePiece(toPiece))) {
    return false
  }
  return true
}

export default canMove