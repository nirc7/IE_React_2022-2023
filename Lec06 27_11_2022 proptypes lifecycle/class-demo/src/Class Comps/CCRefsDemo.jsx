import React, { Component } from 'react'

export default class CCRefsDemo extends Component {
  constructor(props) {
    super(props);

    this.state={
      txt1:'',
      txt2:''
    };

    this.txtInput1 = null;
    this.textInput2 = React.createRef();
  }

  TextChanged = () => {
    this.setState({
      txt1: this.txtInput1.value,
      txt2: this.textInput2.current.value
    })
  }

  render() {
    return (
      <div>
        txt1:<input type="text"
          ref={(input) => { this.txtInput1 = input }}
          onChange={this.TextChanged} />
        <span style={{ marginRight: 50 }} />
        {this.state.txt1}
        <hr />
        txt2: <input type="text"
          ref={this.textInput2}
          onChange={this.TextChanged} />
        <span style={{ marginRight: 50 }} />
        {this.state.txt2}
      </div>
    )
  }
}
