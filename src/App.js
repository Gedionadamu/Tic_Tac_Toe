import logo from './logo.svg';
import './App.css';
import Cell from './Components/cell';
import { useState } from 'react';



function App() {
  const [cells, setCells] = useState(["","","","","","","","",""])
  const [go, setGo] = useState("circle")
  const [winningMessage, setWinningMessage] = useState(null)

  const message = "its is now " + go + "'s turn."
  return (
    <div className="App">
      <div className="gameboard">
        {cells.map((cell, index)=> <Cell 
        key={index} 
        id={index} cell={cell} setCells={setCells} go={go}
        setGo={setGo}
        cells={cells}
        />)}
      </div>
      <p>{message}</p>
    </div>
  );
}

export default App;
