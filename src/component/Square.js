import React from 'react'

export default function Square(props){

    const { value, clickHandler } = props
    const style = {
        background: 'lightgrey',
        border: '2px solid purple',
        fontSize: '30px',
        fontWeight: '800',
        cursor: 'pointer',
        outline: 'none'
    }
    return(
        <button onClick={clickHandler} style={style}>{value}</button>
    )
}