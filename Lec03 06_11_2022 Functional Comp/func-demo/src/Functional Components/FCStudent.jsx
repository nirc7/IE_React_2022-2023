
export default function FCStudnet(props) {

  let num = props.id * 5;
  console.log(num);

  function btnAddOne() {
    console.log(num);
    num++;
  }

  function chnTxtnum(eli) {
    console.log(eli.target.value);
  }
  
  if (70 < num) {
    return (
      <div>
        id = {props.id} <br />
        name = {props.name} <br />
        grade = {props.grade} <br />
        num = {num} <br />
        <button
          style={{ backgroundColor: 'cyan' }}
          onClick={btnAddOne}>add one
        </button>
        <input type="text" onChange={chnTxtnum} />
      </div>
    );
  }
  else {
    return (
      <div>not above 70</div>
    );
  }
}