import React, { useContext } from 'react';
import { NumContext } from './FCNumContext';

export default function FCSetNumFromConstext() {
  const { Add2Num, setNum } = useContext(NumContext);

  return (
    <div>
      FCSetNumFromConstext <br />
      <button onClick={() => Add2Num()}>Add2Num</button> <br />
      <button onClick={() => setNum(7)}>setNum</button>
      <input type="text" onChange={(e) => setNum(e.target.value)} />
    </div>
  )
}
