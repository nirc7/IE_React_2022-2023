import logo from './logo.svg';
import './App.css';

const apiUrl = 'http://localhost:56977/api/students/';

function App() {

  const btnGetAll = () => {

    fetch(apiUrl, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch btnFetchGetStudents= ", result);
          result.map(st => console.log(st.Name));
          console.log('result[0].Grade=', result[0].Grade);
        },
        (error) => {
          console.log("err post=", error);
        });
  }
  const btnGetId = () => {

    fetch(apiUrl + "2", {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch btnFetchGetStudents= ", result);
          console.log('result.Grade=', result.Grade);
        },
        (error) => {
          console.log("err post=", error);
        });

  }
  const btnPost = () => {

    const s = { //pay attention case sensitive!!!! should be exactly as the prop in C#!
      Id: 77,
      Name: 'nir',
      Grade: 88
    };

    fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(s),
      headers: new Headers({
        'Content-type': 'application/json; charset=UTF-8', //very important to add the 'charset=UTF-8'!!!!
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(response => {
        console.log('res=', response);
        return response.json()
      })
      .then(
        (result) => {
          console.log("fetch POST= ", result);
          console.log(result.Grade);
        },
        (error) => {
          console.log("err post=", error);
        });

  }
  const btnPut = () => {

    const s = { //pay attention case sensitive!!!! should be exactly as the prop in C#!
      Id: 2,
      Name: 'nir',
      Grade: 88
    };

    fetch(apiUrl + "2", {
      method: 'PUT',
      body: JSON.stringify(s),
      headers: new Headers({
        'Content-type': 'application/json; charset=UTF-8', //very important to add the 'charset=UTF-8'!!!!
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(response => {
        console.log('res=', response);
        if (response.ok) {
          console.log(':)');
        }
      },
      (error) => {
        console.log("err post=", error);
      });

  }
  const btnDelete = () => {

    fetch(apiUrl + "2", {
      method: 'Delete',
      headers: new Headers({
        'Content-type': 'application/json; charset=UTF-8', //very important to add the 'charset=UTF-8'!!!!
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(response => {
        console.log('res=', response);
        if (response.ok) {
          console.log(':)');
        }
      },
      (error) => {
        console.log("err post=", error);
      });

   }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={btnGetAll}>Get ALL</button> <br />
        <button onClick={btnGetId}>Get by Id</button> <br />
        <button onClick={btnPost}>POST</button> <br />
        <button onClick={btnPut}>PUT</button> <br />
        <button onClick={btnDelete}>DELETE</button> <br />
      </header>
    </div>
  );
}

export default App;
