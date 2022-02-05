import React, { useState } from 'react';
import './App.css';
import { TextField, Button } from "@material-ui/core";

import Selector from './components/Selector';
import transformWord from './helpers/transformWord';
import isRussianWord from './helpers/isRussianWord';
import isCorrectWord from './helpers/isCorrectWord';

function App() {
  const [basicWord, setBasicWord] = useState('');
  const [caseName, setCaseName] = useState('');

  const [result, setResult] = useState('')

  const handleChangeSelect = (e: any) => {
    setCaseName(e.target.value)
  }

  const handleTransform = () => {
    if(!caseName) {
      setResult('Выберите нужный падеж');
      return;
    }

    if(isRussianWord(basicWord)) {

      if(isCorrectWord(basicWord)) {
        if(caseName === 'Именительный') {
          setResult(basicWord);
          return;
        }
        setResult(transformWord(basicWord, caseName))
        return;
      } else {
        setResult('Введите существующее русское слово')
      }

    } else {
      setResult('Введите русское слово')
    }
  }


  return (
    <div className="App">
      <TextField id="standard-basic" label="Введите слово" variant="standard" value={basicWord} onChange={(e) => setBasicWord(e.target.value)} />
      
      <Selector caseName={caseName} handleChangeSelect={handleChangeSelect} />
      <Button variant="contained" onClick={handleTransform}>Преобразовать</Button>

      <p>{result}</p>
    </div>
  );
} 

export default App;
