import { getHI, getPieceColor, getVI, isWhitePiece } from "./board"
import { BoardState, BP, BPType, Move, SquareStateType } from "./types"

type MoveFunc = (n: number) => BPType

const canMove = (piece: SquareStateType, from: BPType, boardSet: BoardState) => {
  let i, options: BPType[] = []
  const moveVerticaly: MoveFunc = (n) => BP[BP[from] + n * 8] as BPType
  const moveHorizontaly: MoveFunc = (n) => {
    const res = BP[BP[from] + n] as BPType
    return getHI(res) === getHI(from) ? res : undefined
  }
  const allow = (pos: BPType) => {
    options.push(pos)
  }
  const isEmpty = (pos: BPType) => !boardSet[pos]
  const isCapture = (pos: BPType) => getPieceColor(boardSet[pos]) && getPieceColor(boardSet[pos]) !== getPieceColor(piece)
  const allowIfEmpty = (pos: BPType) => {
    if (isEmpty(pos)) {
      allow(pos)
    }
  }

  const loop = (moveFunc: MoveFunc, decrement: boolean = false) => {
    let wasCapture = false
    for (let i = 1; i < 8; i++) {
      const nextPos = moveFunc(decrement ? -i : i)
      if (nextPos && !wasCapture && (isEmpty(nextPos) || isCapture(nextPos))) {
        allow(nextPos)
        wasCapture = isCapture(nextPos)
      } else {
        break
      }
    }
  }

  switch (piece) {
    case '♙':
      allowIfEmpty(moveVerticaly(1))
      if (getHI(from) === 1) {
        allowIfEmpty(moveVerticaly(2))
      }
      break
    case '♟︎':
      allowIfEmpty(moveVerticaly(-1))
      if (getHI(from) === 6) {
        allowIfEmpty(moveVerticaly(-2))
      }
      break
    case '♖':
    case '♜':
      loop(moveVerticaly)
      loop(moveVerticaly, true)
      loop(moveHorizontaly)
      loop(moveHorizontaly, true)
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