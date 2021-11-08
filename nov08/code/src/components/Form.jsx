import React from "react";

export const Form = ()=>{
    const [text, setText] = React.useState("")
    const handleChange = (e)=>{
        setText(e.target.value)

        console.log(text)
    }
    return (
        <>
        <input type="text" onChange={handleChange} placeholder="Enter name of item"></input>
        <input type="number" onChange={handleChange} placeholder="Quantity"></input>
        <input type="submit"></input>

        </>
    )
}