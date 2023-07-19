import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className='data'>
//       Hola Mundo!!!
//     </div>
//   );
// }

  
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       {/* Edit <code>src/App.js</code> and save to reload. */}
    //       Hello World!!!
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>


const App = ()=>{

  let myVar = Date();

  const myFunction = ()=>{

    console.log("Ejecutando Función")
  }

  return (
    <div>
    <div className='data'>
    {/* Hola Mundo!!!
    <br/>
    <br/>
    {myVar}
    <img src={logo}></img> */}

    <div className='container'>
      <div className='item'>{myVar}</div>
      <div className='item'>Hello</div>
      <div className='item'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, nam ad impedit ullam dolorum aliquid fugiat maxime. Recusandae, possimus magni officiis corrupti odio rerum molestias.</div>

    </div>

    <button onClick={myFunction}>Botón Ejecutar</button>

  </div>
  </div>


  

  );

}

export default App;
