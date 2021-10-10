import React, { useState } from "react";

export default function Points(team) {
    let name = team.team+''
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("");

    const handleFormSubmit = (event) => {
      event.preventDefault()
      if (value !== ""){
        setCount(parseInt(value)+(count))
      }

      reset()
     }

     const reset = () => {
      setValue("")
     }
    

  return (
    <div className="point" style={{backgroundColor: name}}>
      <h3>{name.charAt(0).toUpperCase() + name.slice(1)}: <b>{count}</b> poeng</h3>
      <form onSubmit={handleFormSubmit}>
      <input value={value} onChange={(e) => setValue(e.target.value)} type='number'/>
      <br/>
      <button className="button" type='submit'>Avgi</button>
      </form>  
{/*       <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button> */}
    </div>
  );
}
