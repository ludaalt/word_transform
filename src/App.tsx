import React, { useState } from 'react';
import './App.css';
import { TextField, Button } from "@material-ui/core";

import Selector from './components/Selector';

function App() {
  const [result, setResult] = useState('')
  return (
    <div className="App">
      <TextField id="standard-basic" label="Введите слово" variant="standard" />
      <Selector />
      <Button variant="contained">Преобразовать</Button>

      <p>{result}</p>
    </div>
  );
}

export default App;
