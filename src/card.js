import React, {useState} from "react";
import YouTube from "react-youtube";


export default function Card(props) {
    let reveal=props.reveal
    let contestant = props.person
    let audio = new Audio("/cardflip.mov")
    
    const [isActive, setIsActive] = useState(false)
    const [visited, setvisited] = useState(0)
    function start(){
      setIsActive(!isActive)
      if (!isActive && !visited){
        audio.play()
      }
      else{
        setvisited(1)
      }
    }
    const opts = {
      height: '20',
      width: '20',
      playerVars: {
        autoplay: 0,
      },
    };

  return (
    <div >
      <div onClick={start} className={`card ${ isActive ? 'flip-card' : 'flip-card.hover'} ${ visited ? 'visited' :""}`}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img  className={`cardImg ${reveal ? contestant.team :""}`} src={`img/players/${contestant.name}.png`}  alt="Avatar" />
          </div>
          <div className="flip-card-back">
            <h1>{contestant.name}</h1>
            <p>{contestant.competition}</p>
            <div id="index100">
            {contestant.competition==="Opius" && <YouTube opts={opts} videoId='iRA82xLsb_w'></YouTube>}
            </div>
            <p>Poeng: {contestant.poeng}</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
