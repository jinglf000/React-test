import React, { useState } from 'react';

export const HookState = () => {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount(count + 1);
  }
  const handleAlert = () => {
    setTimeout(() => {
      alert(count);
    }, 3000);
    console.log('count',count);
  }

  return <div>
    <p>{count}</p>
    <button onClick={handleAdd}>=== 加一 ====</button>
    <button onClick={handleAlert}> show Alart </button>
  </div>
}
