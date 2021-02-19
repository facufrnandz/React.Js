import { useState } from 'react';
import './App.css';

const Display = ({counter}) => <h1>{counter}</h1>

const Button = ({clicking, text}) => <button onClick={clicking}>{text}</button>


function App() {
  
  const [counter, setCounter] = useState(0);
  
  const incrementByOne = () => {setCounter(counter + 1)};
  const decreaseByOne = () => {setCounter(counter - 1)};
  const setToZero = () => {setCounter(0)};

  return (
    <div>
      <Display counter={counter}/>
        <div className='button-section'>
            
          <Button clicking={decreaseByOne} text='Decrementar'/>
          <Button clicking={setToZero} text='Setear a Cero'/>
          <Button clicking={incrementByOne} text='Incrementar'/>

        </div>
    </div>
  );
}

export default App;
