import { isWhitePiece } from "./board"
import { BoardState, BP, BPType, Move, SquareStateType } from "./types"

const canMove = (piece: SquareStateType, from: BPType, boardSet: BoardState) => {
  let options: BPType[] = []
  switch(piece) {
    case '♙':
      const mv = BP[BP[from] + 8] as BPType
      console.log(boardSet[mv])
      if(!boardSet[mv]) {
        options.push(mv)
      }
      break
    default:
      return []
  }

  //cannot capture piece of the same color
  // if(toPiece && (isWhitePiece(piece) && isWhitePiece(toPiece) || !isWhitePiece(piece) && !isWhitePiece(toPiece))) {
  //   return false
  // }
  return options
}

export default canMove