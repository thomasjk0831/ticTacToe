import React from 'react';
import Game from './component/Game'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className = "main-container">
     <div className="board">
        <h1>Tic Tac Toe</h1>
        <Game />
     </div>
      
    </div>
  );
}

export default App;
