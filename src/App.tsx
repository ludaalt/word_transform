import React, { useState } from 'react';
import './App.css';
import { TextField, Button } from "@material-ui/core";

import Selector from './components/Selector';
import transformWord from './helpers/transformWord';

function App() {
  const [basicWord, setBasicWord] = useState('');
  const [caseName, setCaseName] = useState('');

  const [result, setResult] = useState('')

  const handleChangeSelect = (e: any) => {
    setCaseName(e.target.value)
  }
  return (
    <div className="App">
      <TextField id="standard-basic" label="Введите слово" variant="standard" value={basicWord} onChange={(e) => setBasicWord(e.target.value)} />
      
      <Selector caseName={caseName} handleChangeSelect={handleChangeSelect} />
      <Button variant="contained" onClick={() => setResult(transformWord(basicWord, caseName))}>Преобразовать</Button>

      <p>{result}</p>
    </div>
  );
}

export default App;
