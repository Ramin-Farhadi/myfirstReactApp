import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick} style={{backgroundColor:props.color}}className={props.className}>{props.title}</button>
    )
}



export default Button