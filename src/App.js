// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='titulo'>
        <h1>Olá, seja bem vindo</h1>
      </div>
      <div className='Login'>
        <div id='campo-email'>
          <h3>Email</h3>
          <input id='email' name='myInput' />
        </div>

        <div id='campo-senha'>
          <h3>Senha</h3>
          <input id='senha' name='myInput'/>
        </div>

        <div>
          <button 
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </div>

        <div>
          <a>Cadastrar</a>
        </div>
      </div>
    </div>
  );
}

export default App;
