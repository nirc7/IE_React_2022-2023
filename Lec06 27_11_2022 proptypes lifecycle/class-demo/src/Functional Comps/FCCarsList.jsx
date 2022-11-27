import CCCar from "../Class Comps/CCCar";

export default function FCCarsList(props) {

  // const getIdFromCar2Delete = (id2Delete) => {
  //   props.sendId2DeleteFromCL(id2Delete);
  // }


  let carsStr = props.myCars.map((car, ind) => {
    console.log(car.id);
    return <CCCar id={car.id}
      model={car.model}
      speed={car.speed}
      lp={car.lp}
      key={car.id} 
      sendId2Delete={()=> props.sendId2DeleteFromCL(car.id) } />;
  }
  )

  return (
    <div>
      CARS LIST: <br />
      {carsStr}
      <hr />
    </div>
  );

}