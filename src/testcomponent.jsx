import React from 'react';

export default function TestComponent(props) {
  return (
    <div>
      <h1>{props.headline}</h1>
      { showCount ? <p>{count}</p> : null }
      <div>show something to prove this works</div>      
    </div>
  );
}
