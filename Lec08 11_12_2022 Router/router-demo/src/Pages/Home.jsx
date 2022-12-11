import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const btnGo2User = () => {

    let userObj = {
      userId: 1,
      userName: "avi"
    };

    navigate('user/' + 7 ,
      { state: userObj });
  }

  return (
    <div>
      Home <br />
      <button onClick={() => navigate('about')} >go2About</button> <br />
      <button onClick={btnGo2User} >go2User</button>
    </div>
  )
}
