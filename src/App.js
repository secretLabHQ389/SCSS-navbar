import React from 'react';
import './App.scss';

function App() {
  return (
    <>
      {/* Variable Example */}
      <h1>This is a variable example</h1>

      {/* Nested Rules */}
      <div id="nested">
        <h3>This is a nested rules example</h3>
      </div>

      {/* Interpolation Example */}
      <p className="interpolation">Interpolation Example.</p>

      {/* Function Example */}
      <div id="function">
        <h3>This is a function example</h3>
      </div>

      { /* Mixin Example */}
      <div id="mixin">
        <p>This is a mixin Example</p>
      </div>
    </>
  );
}

export default App;
