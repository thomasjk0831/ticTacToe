import React, { useEffect, useState } from 'react'
import Board from './Board'

export default function(){
    //array containing values in the game board
    const [gameBoard, setGameBoard] = useState(Array(9).fill(null))
    //state containing value if there is a  winner: "X" or "O"
    const [winner, setWinner] = useState(null)
    const [oIsNext, setOIsNext] = useState(true)

    //if gameBoard changes, check if there is a winner
    useEffect(()=>{
        const list = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        for(let i=0; i<list.length; i++){
            const [a,b,c] = list[i]
            if(gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]){
                setWinner(gameBoard[a])
            }
        }
    }, [gameBoard])

    function clickHandler(i){
        const tempBoard = [...gameBoard]
        if(winner || tempBoard[i] )
        return

        oIsNext? tempBoard[i]="O": tempBoard[i]="X"
        setGameBoard(tempBoard)
        setOIsNext(!oIsNext)
    }

    function gameStarter(){
        setGameBoard(Array(9).fill(null))
        setWinner(null)
        setOIsNext(true)
    }

    return (
        <>
            <Board gameBoard={gameBoard} clickHandler={clickHandler} />
            {
                winner? <p>The Winner is {winner}</p>: null
            }
            <div className="starter">
            <button  onClick={gameStarter}>Start Game</button>
              
            </div>

        </>
    )
}
