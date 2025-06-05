
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TicTacToeProps {
  darkMode: boolean;
}

const TicTacToe: React.FC<TicTacToeProps> = ({ darkMode }) => {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);

  const calculateWinner = (squares: (string | null)[]) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];
    
    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
    
    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  const renderSquare = (index: number) => {
    return (
      <Button
        key={index}
        onClick={() => handleClick(index)}
        className={`w-16 h-16 text-2xl font-bold transition-all duration-200 ${
          darkMode 
            ? 'bg-slate-700 hover:bg-slate-600 text-white border-slate-600' 
            : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-300'
        } ${board[index] === 'X' 
          ? (darkMode ? 'text-cyan-400' : 'text-blue-600') 
          : board[index] === 'O' 
            ? (darkMode ? 'text-purple-400' : 'text-purple-600') 
            : ''
        }`}
        variant="outline"
      >
        {board[index]}
      </Button>
    );
  };

  const isBoardFull = board.every(square => square !== null);
  const gameStatus = winner 
    ? `Winner: ${winner}` 
    : isBoardFull 
      ? "It's a tie!" 
      : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <Card className={`${
      darkMode 
        ? 'bg-slate-800/50 border-slate-700 backdrop-blur-sm' 
        : 'bg-white/70 border-slate-200 backdrop-blur-sm'
    } w-80`}>
      <CardHeader className="text-center">
        <CardTitle className={`${darkMode ? 'text-white' : 'text-slate-800'}`}>
          Tic Tac Toe
        </CardTitle>
        <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
          {gameStatus}
        </p>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 9 }, (_, index) => renderSquare(index))}
        </div>
        <Button 
          onClick={resetGame}
          className={`${
            darkMode 
              ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700' 
              : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
          }`}
        >
          New Game
        </Button>
      </CardContent>
    </Card>
  );
};

export default TicTacToe;
