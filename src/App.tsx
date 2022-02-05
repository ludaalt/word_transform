import React, { useState } from 'react';
import './App.css';
import { TextField, Button } from "@material-ui/core";

import Selector from './components/Selector';
import transformWord from './helpers/transformWord';
import isRussianWord from './helpers/isRussianWord';
import isCorrectWord from './helpers/isCorrectWord';

const App = () => {
  const [basicWord, setBasicWord] = useState<string>('');
  const [caseName, setCaseName] = useState<string>('');

  const [result, setResult] = useState<string>('')

  const handleChangeSelect = (event: React.ChangeEvent<{ name?: string | undefined; value: string | unknown ; }>): void => {
    setCaseName(typeof event.target.value === 'string' ? event.target.value : '')
  }

  const handleTransform = (): void => {
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
