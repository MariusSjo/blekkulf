import React, { useState } from "react";
import Card from "./card.js";
import Points from "./points";
import Countdown from "./countdown.js";
import Cover from "./cover.js";
import "./App.css";
import YouTube from "react-youtube";

let teams = ["turquoise", "yellow", "pink"];

let persons = [
  { team: "yellow", name: "Torkjell", competition: "Ddakji", poeng: "5/-5" },
  { team: "blue", name: "Marius", competition: "Singstar", poeng: "10" },
  { team: "pink", name: "Hanne", competition: "Opius", poeng: "-10" },
  { team: "yellow", name: "Anders", competition: "Confidence", poeng: "-2" },
  { team: "pink", name: "Julia", competition: "Vodka eller vann", poeng: "2" },
  { team: "pink", name: "Anniken", competition: "Ring of fire", poeng: "-10" },
  { team: "blue", name: "Hedvig", competition: "Veddeløp", poeng: "7" },
  { team: "yellow", name: "Øyvind", competition: "Breezerrace", poeng: "7" },
  {
    team: "yellow",
    name: "Sara",
    competition: "Glassbro/bussrute",
    poeng: "5/-3",
  },
  { team: "blue", name: "Sander", competition: "Sukkerkjeks", poeng: "10/-5" },
  { team: "blue", name: "Thomas", competition: "Terningspill", poeng: "5" },
  { team: "yellow", name: "Gina", competition: "Baby freeze", poeng: "10" },
  {
    team: "pink",
    name: "MrBursdag",
    competition: "Flip the cup",
    poeng: "10",
  },
];

const opts = {
  height: "20",
  width: "20",
  playerVars: {
    autoplay: 1,
  },
};

function App() {
  const [hideGame, setHideGame] = useState(1)
  const [reveal, setreveal] = useState(0);
  return (
    <div className="App">
         { hideGame && <div className="cover">
            <div onClick={()=>{setHideGame("")}} className="coverContent">
            <Cover/>
            </div>
          </div>}
          
          <div className="points">
          {teams.map((team) => (
            <Points team={team} />
          ))}
          </div>
          <Countdown/>
      <header className="App-header">
        <img id="poengbakgrunn" src="img/poengbakgrunn.png" alt="scetchy"></img>
      </header>
      {!reveal && <button className="button" onClick={() => setreveal(1)}>Avslør lagene!</button>}
      <div className="cardContainer">
        {persons.map((person) => (
          <Card key={person.name} person={person} reveal={reveal} />
        ))}    
      </div>
      {!hideGame && <div style={{position: "fixed"}}><YouTube classname="youtube" videoId="v9NQYKv2rTg" opts={opts} /></div>}
    </div>
  );
}

export default App;
