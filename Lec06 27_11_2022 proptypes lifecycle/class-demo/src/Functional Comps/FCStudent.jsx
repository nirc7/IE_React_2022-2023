
function FCStudent(props) {

  let bonus = props.grade;
  bonus += 5;

  function btnAddObne() {
    //props.grade = 200; //ERROR!!!!
    bonus++;
    console.log(bonus);
  }

  return (
    <div>
      <button onClick={btnAddObne}>Add One</button> <br />
      id={props.id}  <br />
      name={props.name} <br />
      grade={props.grade} <br />
      WBonus={bonus}
      {/* grade={props.grade ? "80" : 60} */}
    </div>
  );
}

export default FCStudent;