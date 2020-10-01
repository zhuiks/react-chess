import React from "react"
const HORIZONTALS = [1,2,3,4,5,6,7,8]
const VERITCALS = ['a','b','c','d','e','f','g','h']
const Board: React.FC = () =>  (
   <>
    {HORIZONTALS.reverse().map(horizontal => (
      <div key={horizontal} className="horizontal">
        <div>{horizontal}</div>
        {VERITCALS.map(vertical => (
          <div key={vertical+horizontal} className="square">{vertical+horizontal}</div>
        ))}
      </div>
    ))}
  </>
  )


export default Board