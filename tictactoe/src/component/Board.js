import React from 'react'
import Square from './Square'

export default function Board(props){

    const { gameBoard, clickHandler } = props
    const style = {
        border: '4px solid darkblue',
        width: '400px',
        height: '400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
    }
       
    return (
        <div style={style}>
            {
               gameBoard.map((value, i)=>{
                return <Square key={i} value={value} clickHandler={()=>{clickHandler(i)} }/>
            })
            }
            
        </div>

    )
       
}
