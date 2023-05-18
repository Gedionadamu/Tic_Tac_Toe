import logo from './logo.svg';
import './App.css';
import Cell from './Components/cell';
import { useState , useEffect} from 'react';



function App() {
  const [cells, setCells] = useState(["","","","","","","","",""])
  const [go, setGo] = useState("circle")
  const [winningMessage, setWinningMessage] = useState(null)

  const message = "its is now " + go + "'s turn."
  const checkScore = () => {
    const winnigCombos = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,3,7],[2,5,8],
      [0,4,8],[2,4,6]]
      winnigCombos.forEach(array => {
        let circleWins = array.every(cell=> cells[cell]==="circle")
        if (circleWins) {
          setWinningMessage(" Circle Wins")
          return
        }
      })
      winnigCombos.forEach(array => {
        let crossWins = array.every(cell=> cells[cell]==="cross")
        if (crossWins) {
          setWinningMessage(" Cross Wins")
          return
        }
      })
  }
  useEffect(()=> {
    checkScore()
  },[cells])
  return (
    <div className="App">
      <div className="gameboard">
        {cells.map((cell, index)=> <Cell 
        key={index} 
        id={index} cell={cell} setCells={setCells} go={go}
        setGo={setGo}
        cells={cells}
        winningMessage={winningMessage}
        />)}
      </div>
      <p>{winningMessage || message}</p>
    </div>
  );
}

export default App;
