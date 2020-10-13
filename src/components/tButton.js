import React from "react"
const Tbutton=(props)=>{
    return (
    <button onClick={handleButtonClick}>{props.children}</button>
    )
}

const handleButtonClick=()=>{alert('no sta tocar!')}


export default Tbutton