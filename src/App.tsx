import React from 'react';
import { Counter } from './features/counter/Counter';
import StyledKeyCap from "./component/StyledKeyCap"
import StyledKeyboard from './component/StyledKeyboard';

function App() {
  return (
    <div className="App">
        {/* <Counter /> */}
        <StyledKeyCap />
        <StyledKeyboard />
    </div>
  );
}

export default App;
