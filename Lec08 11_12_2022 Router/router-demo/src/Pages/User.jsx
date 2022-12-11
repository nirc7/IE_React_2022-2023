import React from 'react'
import { useLocation, useParams } from 'react-router-dom'


export default function User() {
  const { state } = useLocation();
  const { userid }  = useParams();


  let userObj = state;
  console.log(userObj.userName);
  console.log(userid);

  return (
    <div>
      User <br />
      user name = {userObj.userName} <br />
      user Id = {userObj.userId}
    </div>
  )
}
