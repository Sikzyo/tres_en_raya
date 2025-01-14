import Square from "./square";
import { useState } from "react";

const TURNS = {
  X: "X",
  O: "O",
};

function App() {
  const [board, setUpdate] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);

  const updateBoard = (index) => {
    if (board[index]) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = turn;
    setUpdate(newBoard);
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
  };

  return (
    <>
      <main className="board">
        <h1>Tres en Raya</h1>
        <section className="game">
          {board.map((position, index) => {
            return (
              <Square key={index} updateBoard={updateBoard} index={index}>
                {board[index]}
              </Square>
            );
          })}
        </section>

        <section className="turn">
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </section>
      </main>
    </>
  );
}

export default App;
