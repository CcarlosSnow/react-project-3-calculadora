import  {useState} from 'react';
import {evaluate} from 'mathjs';
import './App.css';
import Button from './components/Button';
import Clear from './components/Clear';
import Logo from './components/Logo';
import Screen from './components/Screen';

function App() {
  const[input, setInput] = useState('');

  const addInput = (value) => {
    var symbols = ['+','-','*','/'];
    if ((symbols.includes(value) && symbols.includes(input.slice(-1))) || (value === '.' && input.slice(-1) === '.'))
      setInput(input.slice(0, -1) + value);
    else
      setInput(input + value);
  };

  const clearInput = () => { setInput('') };

  const calculateResult = () => { 
    if (input) {
      setInput(evaluate(input));
    }
  };

  return (
    <div className='App'>
      <Logo />
      <div className='calculator-container'>
        <Screen input={input} />
        <div className='row'>
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button handleClick={calculateResult}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className='row'>
          <Clear handleClick={clearInput}>Clear</Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
