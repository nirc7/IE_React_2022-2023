import React, { Component } from 'react'
import FCCarsList from '../Functional Comps/FCCarsList';
import FCInputs from '../Functional Comps/FCInputs'

const InitCarsList = [
  { id: 1, lp: "11-22-33", model: "BMW", speed: 200 },
  { id: 2, lp: "22-22-33", model: "Porshe", speed: 180 }
];

export default class CCCarsListApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myCars: InitCarsList,
      counter: InitCarsList.length,
    };
  }

  AddCar = (txtModel, txtSpeed) => {
    let newCounter = this.state.counter + 1;
    let newCars = [...this.state.myCars, { id: newCounter, lp: newCounter + "-22-33", model: txtModel, speed: parseInt(txtSpeed) }];
    console.log(newCars);
    this.setState({ myCars: newCars, counter: newCounter });
  }

  DeleteCar = (id2Del) => {
    let newCars = this.state.myCars.filter( car => car.id !== id2Del);
    console.log(newCars);
    this.setState({ myCars: newCars});
  }

  render() {
    return (
      <div>
        <FCInputs sendSM={this.AddCar} /> <br />
        <FCCarsList myCars={this.state.myCars} sendId2DeleteFromCL={this.DeleteCar} />
      </div>
    )
  }
}
