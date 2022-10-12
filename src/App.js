import React, { useState } from 'react'
import ColorBlock from './ColorBlock';
import './App.css';

function App() {
  let [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])

  let colorMap = colors.map((color, i) => {
    return (
      <div>
        <ColorBlock key={i} color={color} />
      </div>
    )
  })
  return (
    <div className="App">
      {colorMap}
    </div>
  );
}


export default App;
