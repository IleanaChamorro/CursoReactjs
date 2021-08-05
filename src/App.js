import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente'
import Propiedades from './components/Propiedades'
import Estado from './components/Estado'
import RenderizadoCondional from './components/renderizadocondicional';
import RenderizadoElementos from './components/RenderizadoElementos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </section>
        <section>
        <Componente msg="Hola soy un componente funcional Expresado desde una props"/>
        <hr></hr>
        <Propiedades 
        cadena="Esto es una cadena de texto" 
        numero={19} 
        boolean={true}
        arreglo={[1,2,3]}
        objeto={{nombre:"Ileana", correo:"ileana@mail.com"}}
        funcion={num => num * num}
        elementoReact={<i>Esto es un elemento React</i>}
        componenteReact={<Componente msg="Soy un componente pasado como prop"/>}
        />
        <hr/>
          <Estado/>
          <hr></hr>
          <RenderizadoCondional/>
          <hr></hr>
          <RenderizadoElementos/>
       </section>
      </header>
    </div>
  );
}

export default App;
