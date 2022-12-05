import logo from './logo.svg';
import './App.css'; import React, { useState } from 'react';

var john="john"
function App() {
  
  const [steps, setSteps] = useState(0);

  function increment() {
    setSteps(prevState => prevState + 1);
  }
   const [player, setPlayer] = useState("1");

   function turn(){
    if(player=="1"){
      setPlayer("2")
    }
    if(player=="2"){
      setPlayer("1")
    }
   }
   const[piece,setPiece] = useState("-")
   
   function changePiece(){
    
      if(player=="1"){
      setPiece("X")
    }
    else{
      setPiece("O")
    }
  }

  return (
    <div>{john}
    <p>{steps}</p>
    <button onClick={increment}></button>
    <p>{player}</p>
    <button onClick={turn}></button>
    <div id="board">
           <div id="row">
          <div id="square" onClick={changePiece}>{piece}</div><div id="square"onClick={changePiece}>{piece}</div><div id="square"onClick={changePiece}>{piece}</div>
         </div>
         <div id="row">
          <div id="square">X</div><div id="square">O</div><div id="square">O</div>
         </div>
         <div id="row">
          <div id="square">X</div><div id="square">O</div><div id="square">O</div>
         </div></div>
         </div>
  

    )
}


export default App;
