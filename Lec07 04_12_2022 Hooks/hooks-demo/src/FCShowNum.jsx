import React, { useContext } from 'react';
import { NumContext } from './FCNumContext'

export default function FCShowNum() {
  const { num } = useContext(NumContext);
  
  return (
    <div>
      FCShowNum <br />
      num = {num}
    </div>
  )
}
