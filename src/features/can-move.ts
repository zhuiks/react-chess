import { getHI, getPieceColor, getVI, isWhitePiece } from "./board"
import { BoardState, BP, BPType, Move, SquareStateType } from "./types"

type MoveFunc = (n: number, pos?: BPType) => BPType

const canMove = (piece: SquareStateType, from: BPType, boardSet: BoardState) => {
  let i, options: BPType[] = []
  const moveVerticaly: MoveFunc = (n, pos = from) => BP[BP[pos] + n * 8] as BPType
  const moveHorizontaly: MoveFunc = (n, pos = from) => {
    const res = BP[BP[pos] + n] as BPType
    return getHI(res) === getHI(pos) ? res : undefined
  }
  // const moveDiagonalyA: MoveFunc = (n) => moveHorizontaly(n, moveVerticaly(n))
  const moveDiagonalyA: MoveFunc = (n) => {
    const res = BP[BP[from] + n + n*8] as BPType
    return n > 0 && getVI(res) > getVI(from) && getHI(res) > getHI(from) || n < 0 && getVI(res) < getVI(from) && getHI(res) < getHI(from) ? res : undefined 
  }
  const moveDiagonalyH: MoveFunc = (n) => {
    const res = BP[BP[from] - n + n*8] as BPType
    console.log(res)
    return n > 0 && getVI(res) < getVI(from) && getHI(res) > getHI(from) || n < 0 && getVI(res) > getVI(from) && getHI(res) < getHI(from) ? res : undefined 
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

  const isLegitMove = (pos: BPType) => pos && (isEmpty(pos) || isCapture(pos))
  const loop = (moveFunc: MoveFunc, decrement: boolean = false) => {
    let wasCapture = false
    for (let i = 1; i < 8; i++) {
      const nextPos = moveFunc(decrement ? -i : i)
      if (!wasCapture && isLegitMove(nextPos)) {
        allow(nextPos)
        wasCapture = isCapture(nextPos)
      } else {
        break
      }
    }
  }

  const rookLoops = () => {
    loop(moveVerticaly)
    loop(moveVerticaly, true)
    loop(moveHorizontaly)
    loop(moveHorizontaly, true)
  }
  const bishopLoops = () => {
    loop(moveDiagonalyA)
    loop(moveDiagonalyA, true)
    loop(moveDiagonalyH)
    loop(moveDiagonalyH, true)
  }

  switch (piece) {
    case '♙':
      allowIfEmpty(moveVerticaly(1))
      if (getHI(from) === 1 && isEmpty(moveVerticaly(1))) {
        allowIfEmpty(moveVerticaly(2))
      }
      break
    case '♟︎':
      allowIfEmpty(moveVerticaly(-1))
      if (getHI(from) === 6 && isEmpty(moveVerticaly(-1))) {
        allowIfEmpty(moveVerticaly(-2))
      }
      break
    case '♖':
    case '♜':
      rookLoops()
      break
    case '♗':
    case '♝':
      bishopLoops()
      break
    case '♕':
    case '♛':
      rookLoops()
      bishopLoops()
      break    
    case '♔':
    case '♚':
      if(isLegitMove(moveVerticaly(1))) {
        allow(moveVerticaly(1))
      }
      if(isLegitMove(moveVerticaly(-1))) {
        allow(moveVerticaly(-1))
      }
      if(isLegitMove(moveHorizontaly(1))) {
        allow(moveHorizontaly(1))
      }
      if(isLegitMove(moveHorizontaly(-1))) {
        allow(moveHorizontaly(-1))
      }
      if(isLegitMove(moveDiagonalyA(1))) {
        allow(moveDiagonalyA(1))
      }
      if(isLegitMove(moveDiagonalyA(-1))) {
        allow(moveDiagonalyA(-1))
      }
      if(isLegitMove(moveDiagonalyH(1))) {
        allow(moveDiagonalyH(1))
      }
      if(isLegitMove(moveDiagonalyH(-1))) {
        allow(moveDiagonalyH(-1))
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