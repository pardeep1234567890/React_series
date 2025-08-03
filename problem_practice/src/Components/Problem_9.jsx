import React, { useState, useMemo } from 'react';

function MemoExample() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    console.log('Calculating...');
    return slowFunction(number);
  }, [number]);

  const themeStyle = {
    backgroundColor: dark ? '#333' : '#fff',
    color: dark ? '#fff' : '#000',
    padding: "10px"
  };

  return (
    <div style={themeStyle}>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(prev => !prev)}>Toggle Theme</button>
      <h2>{doubleNumber}</h2>
    </div>
  );
}

function slowFunction(num) {
  console.log('Slow function running...');
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

export default MemoExample;
