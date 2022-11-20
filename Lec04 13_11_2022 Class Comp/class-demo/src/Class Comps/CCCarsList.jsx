import { Component } from "react";
import CCCar from "./CCCar";

const InitCarsList = [
  { id: 1, lp: "11-22-33", model: "BMW", speed: 200 },
  { id: 2, lp: "22-22-33", model: "Porshe", speed: 180 }
];

export default class CCCarsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myCars: InitCarsList,
      counter: InitCarsList.length
    };
  }

  render() {

    let carsStr = this.state.myCars.map((car) =>
      <CCCar id={car.id} model={car.model} speed={car.speed} lp={car.lp} />);


    return (
      <div>
        CARS LIST: <br />
        {carsStr}
        _______________
      </div>
    );
  }
}