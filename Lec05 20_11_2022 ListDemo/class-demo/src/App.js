import './App.css';
import EHeader from './Elements/EHeader';
import FCStudent from './Functional Comps/FCStudent';
// import CCCar from './Class Comps/CCCar';
// import CCCarsList from './Class Comps/CCCarsList';
import CCCarsListApp from './Class Comps/CCCarsListApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {EHeader}
        <CCCarsListApp /><br/><br/>
        {/* <CCCar id={1} lp={"11-222-33"} model="BMW"/> <br/>   */}
        <FCStudent id={7} name="avi" grade={80} /> <br/>
        <FCStudent id={7} name="benny" grade={100} />
      </header>
    </div>
  );
}

export default App;
