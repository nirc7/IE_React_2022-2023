import React from 'react'

export default function FCInputs(props) {

  let txtModel = null;
  let txtSpeed = null;


  const chgSpeed = (e) => {
    txtSpeed = e.target.value;
  }

  const btnAddCar = () => {
    props.sendSM(txtModel, txtSpeed);
  }

  return (
    <div>
      model: <input type="text" onChange={(e) => txtModel = e.target.value} /> <br />
      speed: <input type="text" onChange={chgSpeed} /> <br />
      <button onClick={btnAddCar}>Add Car</button> <br />
    </div>
  )
}
