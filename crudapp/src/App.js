import React from 'react';
import CrudApi from './components/CrudApi';
import CrudApp from "./components/CrudApp";

function App() {
  return (
    <>
      <h2>Ejercicio con React</h2>
      <hr/>
      <CrudApi/>
      <hr/>
      <CrudApp/>
    </>
  );
}

export default App;
