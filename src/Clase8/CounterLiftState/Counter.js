import { useState } from "react"

export const Counter = ({count, onAddClick, onDeleteClick}) => {
    return (
        <div className="counter" 
            style={
                {
                    display:'flex', 
                    width:'100%', 
                    justifyItems:'center',
                    marginTop: '3rem'
                }}>
            

            <button onClick={onDeleteClick}> - </button>
            <span>{count}</span>

            <button onClick={onAddClick}> + </button>

            

        </div>
    )

}