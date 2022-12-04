import React, { useContext, useEffect, useState } from 'react';
import {NumContext} from './FCNumContext';
import FCShowNum from './FCShowNum';

export default function FCHooksDemo(props) {
  const [counter, setCounter] = useState(null);
  const [txt, setTxt] = useState('no text');
  const {num} = useContext(NumContext);

  useEffect(() => {
    console.log('useEffect counter was chaged (even to null)...', counter);
  });

  useEffect(() => {
    console.log('useEffect only for counter ...', counter);
  }, [counter]);


  useEffect(() => {
    console.log('component did mount');
    //setStudents([...FCHooksDemo.]);

    return () => {
      console.log('compnt will unpomout');  
    }
  }, [])


  return (
    <div>
      FCHooksDemo <br />
      <button onClick={() => setCounter(pervC => pervC + 1)} >++</button> <br />
      <button onClick={() => setTxt('avi')}>text</button> <br />
      counter={counter ? counter : "no counter yet..."} <br />
      text= {txt} <br />
      num={num} <br />
      <FCShowNum/>
    </div>
  )
}
