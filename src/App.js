import './App.css';
import colorData from "./color-data.json";
import { useState } from 'react';
import ColorList from './components/ColorList';

function App() {
  const [colors, SetColors] = useState(colorData);

  const removeColor = id => {
    const newColors = colors.filter(color => color.id !== id);
    SetColors(newColors);
  };

  const rateColor = (id, rating) => {
    const newColors = colors.map(color => 
      color.id === id ? { ...color, rating } : color
    );
    SetColors(newColors);
  };

  return (
      <ColorList 
        colors={colors}
        onRemoveColor = {removeColor}
        onRateColor={rateColor}
      />
  );
}

export default App;
