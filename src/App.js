import React, { useState } from "react";
import Card from "./card.js";
import Points from "./points";
import Countdown from "./countdown.js";
import Cover from "./cover.js";
import "./App.css";
import YouTube from "react-youtube";

let teams = ["turquoise", "pink"];

let persons = [
  { team: "blue", name: "Øyvind", competition: "Breezerrace", poeng: "7" },
  { team: "blue", name: "Anniken", competition: "Veddeløp", poeng: "-10" },
  { team: "pink", name: "Hanne", competition: "Opus", poeng: "-10" },
  { team: "pink", name: "Gina", competition: "Ddakji", poeng: "5/-5" },
  { team: "blue", name: "Anders", competition: "Confidence", poeng: "-2" },
  { team: "pink", name: "Julia", competition: "Vodka eller vann", poeng: "2" },
  { team: "blue", name: "Sander", competition: "Sukkerkjeks", poeng: "10/-5" },
  {
    team: "pink",
    name: "Sara",
    competition: "Glassbro",
    poeng: "2/-3",
  },
  { team: "pink", name: "Thomas", competition: "Kulespill", poeng: "5" },
  {
    team: "blue",
    name: "MrBursdag",
    competition: "Flip the cup",
    poeng: "10",
  },
  { team: "blue", name: "Marius", competition: "Singstar", poeng: "10" },
];

const opts = {
  height: "20",
  width: "20",
  playerVars: {
    autoplay: 1,
  },
};

function App() {
  const [hideGame, setHideGame] = useState("");
  const [hideGame2, setHideGame2] = useState("");
  const [reveal, setreveal] = useState(0);
  return (
    <div className="App">
      <div
        onClick={() => {
          setHideGame("hidden");
        }}
        className={`cover ${hideGame}`}
      >
        <div className="coverContent">
          <h1>Regler</h1>
          <p>
            1. Antall plusspoeng er antall slurker man kan gi ut.(Gjelder
            lagvis)
          </p>
          <p>2. Antall minuspoeng er antall slurker man skal drikke.</p>
          <p>
            3. Alle har en konkurranse dedikert til seg man ikke kan delta på.
          </p>
          <p>4. Ha det gøy.</p>
          <p>
            <b>Nå er det tid for å komme seg inn i tracksuitene!</b>
          </p>
        </div>
      </div>
      <div
        onClick={() => {
          setHideGame2("hidden");
        }}
        className={`cover ${hideGame2}`}
      >
        <div className="coverContent">
          <Cover />
        </div>
      </div>

      <div className="points">
        {teams.map((team) => (
          <Points team={team} />
        ))}
      </div>
      <Countdown />
      <header className="App-header">
        <img id="poengbakgrunn" src="img/poengbakgrunn.png" alt="scetchy"></img>
      </header>
      {!reveal && (
        <button className="button" onClick={() => setreveal(1)}>
          Avslør lagene!
        </button>
      )}
      <div className="cardContainer">
        {persons.map((person) => (
          <Card key={person.name} person={person} reveal={reveal} />
        ))}
      </div>
      {hideGame2 === "hidden" && (
        <div style={{ position: "fixed" }}>
          <YouTube classname="youtube" videoId="v9NQYKv2rTg" opts={opts} />
        </div>
      )}
    </div>
  );
}

export default App;
