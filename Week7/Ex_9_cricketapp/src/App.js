// src/App.js
import React from 'react';

function App() {
  const flag = false;
  const players = [
    { name: 'Jack', score: 50 },
    { name: 'Michael', score: 70 },
    { name: 'John', score: 40 },
    { name: 'Ann', score: 61 },
    { name: 'Elisabeth', score: 61 },
    { name: 'Sachin', score: 95 },
    { name: 'Dhoni', score: 100 },
    { name: 'Virat', score: 84 },
    { name: 'Jadeja', score: 64 },
    { name: 'Raina', score: 75 },
    { name: 'Rohit', score: 80 },
  ]; 

  // Data for IndianPlayers component
  const T20Players = ['Virat Kohli', 'Rohit Sharma', 'Jasprit Bumrah'];
  const RanjiTrophyPlayers = ['Ajinkya Rahane', 'Cheteshwar Pujara', 'Ravichandran Ashwin'];
  const IndianPlayersMerged = [...T20Players, ...RanjiTrophyPlayers];

  // Sample data for Odd/Even Players (assuming these are names from a larger team)
  const IndianTeamForDestructuring = ['Sachin', 'Dhoni', 'Virat', 'Rohit', 'Yuvraj', 'Raina'];

  // ListOfPlayers Functional Component
  const ListOfPlayers = () => {
    return (
      <div>
        <h1>List of Players</h1>
        <ul>
          {players.map((item, index) => ( 
            <div key={index}>
              <li>Mr. {item.name} <span>{item.score}</span></li>
            </div>
          ))}
        </ul>
      </div>
    );
  };

  // ScoreBelow70 Functional Component
  const ScoreBelow70 = ({ players }) => {
    const playersBelow70 = players.filter(item => item.score < 70); 

    return (
      <div>
        <h1>List of Players having Scores Less than 70</h1>
        <ul>
          {playersBelow70.map((item, index) => (
            <div key={index}>
              <li>Mr. {item.name} <span>{item.score}</span></li>
            </div>
          ))}
        </ul>
      </div>
    );
  };

  // OddPlayers Functional Component
  const OddPlayers = ({ team }) => {
    const [first, , third, , fifth] = team;
    return (
      <div>
        <h1>Odd Players</h1>
        <ul>
          <li>First : {first}</li>
          <li>Third : {third}</li>
          <li>Fifth : {fifth}</li>
        </ul>
      </div>
    );
  };

  // EvenPlayers Functional Component
  const EvenPlayers = ({ team }) => {
    const [, second, , fourth, , sixth] = team;
    return (
      <div>
        <h1>Even Players</h1>
        <ul>
          <li>Second : {second}</li>
          <li>Fourth : {fourth}</li>
          <li>Sixth : {sixth}</li>
        </ul>
      </div>
    );
  };

  // ListOfIndianPlayers Functional Component (for merged array)
  const ListOfIndianPlayers = ({ IndianPlayers }) => {
    return (
      <div>
        <h1>List of Indian Players Merged:</h1>
        <ul>
          {IndianPlayers.map((player, index) => (
            <li key={index}>Mr. {player}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="App">
      {flag === true ? ( // Conditional rendering based on flag 
        <div>
          <ListOfPlayers />
          <hr />
          <ScoreBelow70 players={players} />
        </div>
      ) : (
        <div>
          <h1>Indian Team</h1>
          <OddPlayers team={IndianTeamForDestructuring} />
          <hr />
          <EvenPlayers team={IndianTeamForDestructuring} />
          <hr />
          <ListOfIndianPlayers IndianPlayers={IndianPlayersMerged} />
        </div>
      )}
    </div>
  );
}

export default App;