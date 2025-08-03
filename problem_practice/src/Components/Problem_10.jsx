import React, { useState, useCallback } from 'react';
import Child from './Child';

function CallbackExample() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <>
      <h2>Count: {count}</h2>
      <Child onClick={increment} />
    </>
  );
}
export default CallbackExample