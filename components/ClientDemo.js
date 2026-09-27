'use client';

import { useState } from 'react';

export default function ClientDemo({ children }) {
  const [count, setCount] = useState(0); // <- this is why it's a client component

  console.log('ClientDemo rendered');

  function handleClick(e) {
    setCount(prevState => {
      return prevState + 1
    })
  }
  return (
    <div className="client-cmp">
      <h2>A React Client Component</h2>
      <p>
        Will be rendered on the client <strong>AND</strong> the server.
      </p>
      <button onClick={handleClick}>Count: {count}</button>
      {children}
    </div>
  );
}