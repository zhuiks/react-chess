import React from "react";
import Board from "./componets/board"
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export const App = () => (
  <>
    <h1>
      Welcome To The Game!
    </h1>
    <DndProvider backend={ HTML5Backend }>
      <Board />
    </DndProvider>
  </>
);