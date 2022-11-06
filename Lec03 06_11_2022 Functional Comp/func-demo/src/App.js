import logo from './logo.svg';
import './App.css';
import EHeader from './EHeader';
import FCStudnet from './Functional Components/FCStudent';
import CCPerson from './Class components/CCPerson';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {EHeader}
        <img src={logo} className="App-logo" alt="logo" />
        <FCStudnet id={15} name="avi" grade={100} /> <br/>   
        <FCStudnet id={75} name="benny" grade={99} />
         <CCPerson/>
      </header>
    </div>
  );
}

export default App;
