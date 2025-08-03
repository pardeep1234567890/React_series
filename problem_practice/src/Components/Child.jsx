// Child.js
import React from 'react';

function Child({ onClick }) {
  console.log('Child rendered');
  return <button onClick={onClick}>Increment</button>;
}

export default React.memo(Child);  // prevents re-render unless props change
