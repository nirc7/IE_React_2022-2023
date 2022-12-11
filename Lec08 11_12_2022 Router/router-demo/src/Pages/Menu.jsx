import React from 'react';
import { useParams } from 'react-router-dom';

export default function Menu() {
  const params = useParams();

  return (
    <div>
      Menu <br />
      userid = {params.userid}
    </div>
  )
}
