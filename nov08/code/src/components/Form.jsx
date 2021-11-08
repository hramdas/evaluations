import React from "react";

export const Form = ()=>{
    const [text, setText] = React.useState({
        item : "",
        qt : 1
    })
    const [items, setItems] = React.useState([])

    const handleNameChange = (e)=>{
        // setText(e.target.value)
        text.item = e.target.value
        console.log(text)
    }   
    const handleQtChange = (e)=>{
        // setText(e.target.value)
        text.qt = e.target.value
        console.log(text)
    }   

    const handleSubmit = (e)=>{
        e.preventDefault()
        setItems([...items, text])

        console.log(items)
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input name='item' type="text" onChange={handleNameChange} placeholder="Enter name of item"></input>
            <input name='qt' type="number" onChange={handleQtChange} placeholder="Quantity"></input>

            <input type="submit"></input>
        </form>
        <div>
            {items.map((a)=>(<p>{a.item}</p>))}
        </div>
        </div>
        
    )
}