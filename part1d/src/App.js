import {useState} from 'react';
import './App.css';

const Display = ({counter}) => {

  return(

    <h1>{counter}</h1>
  );
}

const Button = ({clicking, text}) => {

  return(
    <button onClick={clicking}>Incrementar {text}</button>
  );
}

const History = ({history}) => {

  if(history.length === 0){

    return(
      <p> No existe historial</p>
    );
  }
  return(
    <p> Historial: {history.join(' ')}</p>
  );
  
}

const App = () => {
  
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const [allClicks, setAll] = useState([]);

  const increaseLeft = () => {
    const newClicks ={
      left: clicks.left + 1,
      right: clicks.right
    }
    setClicks(newClicks);
    setAll(allClicks.concat('L'));
  }

  const increaseRight = () => {
    const newClicks = {
      left: clicks.left,
      right: clicks.right + 1
    }
    setClicks(newClicks)
    setAll(allClicks.concat('R'))
  }

  return (
    <div>
      
      <Display counter = {clicks.left}/>
      <Button clicking= {increaseLeft} text ='izquierda'/>
      <Button clicking= {increaseRight} text='derecha'/>
      <Display counter = {clicks.right}/>
      <History history = {allClicks}/>

    </div> 
    
  )
}

export default App;
