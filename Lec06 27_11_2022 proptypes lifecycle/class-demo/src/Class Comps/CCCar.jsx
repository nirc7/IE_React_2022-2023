import { Component } from "react";
import PropTypes from 'prop-types'; 

export default class CCCar extends Component {
  constructor(props) {
    super(props);

    let num = 7;//Local 
    this.number = 8;

    //console.log(this.props.id);
    this.state = {
      id: this.props.id,
      speed: this.props.speed
    };
  }

  componentWillUnmount = () => {
    console.log('unmount');
  }

  btnAddSpeed = () => {
    //console.log('before', this.state.speed);
    // this.setState({
    //   speed: this.state.speed + 1,
    //   id: 88
    // });
    this.setState((prev) => ({
      speed: prev.speed + 1,
      id: 88,
      avg: 7.7
    }), () => {
      console.log('speed was increased! = ' + this.state.speed);
    });
    //console.log('after', this.state.speed);
    // this.setState({
    //   speed: this.state.speed + 1,
    //   id: 99
    // });
    this.setState((prev) => ({
      speed: prev.speed + 1,
      id: 99,
      avg: 7.77
    }));
    //console.log('after after', this.state.speed);
  }


  // btnDeleteCar = () => {
  //   this.props.sendId2Delete(this.state.id);
  // }

  render() {
    //console.log('render', this.state.speed);
    //console.log(this.state.avg);

    return (
      <div style={{ border: 'solid 2px green', padding: 10, margin: 10 }}>
        <button onClick={this.btnAddSpeed}>Add Speed</button> <br />
        id={this.state.id} <br />
        licensePlatte = {this.props.lp} <br />
        model={this.props.model} <br />
        speed = {this.state.speed} <br />
        number = {this.number} <br />
        <button onClick={() => this.props.sendId2Delete(this.state.id)}>X</button>
      </div>
    );
  }
}

CCCar.propTypes = {
  id: PropTypes.number.isRequired,
  speed:PropTypes.number.isRequired
  };