import logo from './logo.svg';
import Card from './card.js'
import './App.css';

let persons = [{name: 'Marius',competition:'Singstar', misc:'Lets gooo!'}, 
                {name: 'Julia', competition:'Vodka eller vann', misc:'Kjæreste av hosten <3'},
                {name: 'Anders', competition:'?', misc:'Kjæreste av hosten <3'},
                {name: 'Anniken', competition:'?', misc:' <3'},
                {name: 'Hedvig', competition:'?', misc:'Har sagt at hun skal gå på tur med bursdagsbarnet, men gjør det aldri'},
                {name: 'Øyvind', competition:'Breezerrace', misc:'Elsker å kalle folk for søringer'},
                {name: 'Sara', competition:'Vodka eller vann', misc:'En veldig snill vegetarianer'},
                {name: 'Sander', competition:'Vodka eller vann', misc:'Kjæreste av hosten <3'},
                {name: 'Thomas', competition:'Tekken', misc:'Kjæreste av hosten <3'},
                {name: 'Gina', competition:'Vodka eller vann', misc:'Kjæreste av hosten <3'},
                {name: 'Hanne', competition:'Vodka eller vann', misc:'Kjæreste av hosten <3'}]

function App() {
  return (
    <div className="App" style={{ /* backgroundImage: "url(/img/background.jpeg)" */ background: "rgb(0,212,255)",
    background: "linear-gradient(90deg, rgba(0,212,255,1) 25%, rgba(250,248,99,1) 50%, rgba(255,2,245,1) 75%)", height: "100vh" }}>
      <header className="App-header">
      <img src="img/poengbakgrunn.png"></img>
      </header>
      <div className="cardContainer">
      {persons.map(person => <Card key={person.name} person={person} className="card"/>)}
      </div>
      <div className="points">
        <iframe src={`https://www.youtube.com/watch?v=LhjhlnyxG1Q`}
          frameborder='0'
          allow='autoplay; encrypted-media'
          allowfullscreen
          title='video'
  />
      </div>
      </div>
  );
}

export default App;
