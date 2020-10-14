import { getHI, getVI, isWhitePiece } from "./board"
import { BoardState, BP, BPType, Move, SquareStateType } from "./types"

const canMove = (piece: SquareStateType, from: BPType, boardSet: BoardState) => {
  let options: BPType[] = []
  const moveVerticaly = (n: number) => BP[BP[from] + n * 8] as BPType
  const addIfEmpty = (pos: BPType) => {
    if (!boardSet[pos]) {
      options.push(pos)
    }
  }
  switch (piece) {
    case '♙':
      addIfEmpty(moveVerticaly(1))
      if (getVI(from) === 1) {
        addIfEmpty(moveVerticaly(2))
      }
      break
    case '♟︎':
      addIfEmpty(moveVerticaly(-1))
      if (getVI(from) === 6) {
        addIfEmpty(moveVerticaly(-2))
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