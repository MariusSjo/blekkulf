import React, {useState} from "react";


export default function Card(person) {
    let contestant = person.person

    const [isActive, setIsActive] = useState(false)

  return (
    <div>
      <div onClick={() => setIsActive(!isActive)} className={`card ${ isActive ? 'flip-card' : 'flip-card.hover'}`}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img  className="cardImg" src={`img/players/${contestant.name}.png`} alt="Avatar" />
          </div>
          <div className="flip-card-back">
            <h1>{contestant.name}</h1>
            <p>{contestant.competition}</p>
            <p>{contestant.misc}</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
