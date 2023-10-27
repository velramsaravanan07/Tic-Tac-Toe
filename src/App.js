// import React, { useState } from "react";
// import "./App.css";
// import Board from "./components/Board";
// import ScoreBoard from "./components/ScoreBoard";
// import Reset from "./components/Reset";

// function App() {
//   const WIN_CONITIONS = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   const [board, setBoard] = useState(Array(9).fill(null));
//   const [xPlaying, setXPlaying] = useState(true);
//   const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
//   const[gameOver ,setGameover]=useState(false)
//   const handleBoxClick = (boxIdx) => {
//     const updatedBoard = board.map((value, idx) => {
//       if (idx === boxIdx) {
//         return xPlaying === true ? "x" : "o";
//       } else {
//         return value;
//       }
//     });
//     const winner = checkwinner(updatedBoard);
//     if (winner) {
//       if (winner === "0") {
//         let { oScore } = scores;
//         oScore += 1;
//         setScores({ ...scores, oScore });
//       } else {
//         let { xScore } = scores;
//         xScore += 1;
//         setScores({ ...scores, xScore });
//       }
//     }

//     checkwinner(updatedBoard);
//     setBoard(updatedBoard);
//     setXPlaying(!xPlaying);
//   };

//   const checkwinner = (board) => {
//     for (let i = 0; i < WIN_CONITIONS.length; i++) {
//       const [x, y, z] = WIN_CONITIONS[i];
//       if (board[x] && board[x] === board[y] && board[y] === board[z]) {
//         setGameover(true);
//         return board[x];
//       }
//     }
//   };

//   const resetBoard=()=>{
//     setGameover(false)
//     setBoard(Array(9).fill(null))
//   }

//   return (
//     <div className="App">
//       <ScoreBoard scores={scores} xPlaying={xPlaying}/>
//       <Board board={board} onClick={gameOver?resetBoard: handleBoxClick} />
//       <Reset resetBoard={resetBoard}/>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";
import Reset from "./components/Reset";

function App() {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false); // Initialize to false
  const handleBoxClick = (boxIdx) => {
    if (gameOver || board[boxIdx]) {
      return; // Return if the game is over or the box is already filled
    }

    const updatedBoard = board.map((value, idx) => (idx === boxIdx ? (xPlaying ? "x" : "o") : value));
    const winner = checkWinner(updatedBoard);
    
    if (winner) {
      const updatedScores = { ...scores };
      updatedScores[winner + "Score"] += 1;
      setScores(updatedScores);
      setGameOver(true);
    } else {
      setBoard(updatedBoard);
      setXPlaying(!xPlaying);
    }
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        return board[x];
      }
    }
    return null;
  };

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };

  return (
    <div className="App">
      <ScoreBoard scores={scores} xPlaying={xPlaying} />
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
      <Reset resetBoard={resetBoard} />
    </div>
  );
}

export default App;

