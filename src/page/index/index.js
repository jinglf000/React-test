import React, { Component, useRef } from 'react';

const FuncyButton = props => {
  const obj = useRef('12');
  console.log(obj);
  return <button ref={obj}>{props.children}</button>;
};

export class FButton extends Component {
  componentDidMount() {
    // console.log(this.$ss);
  }

  render() {
    return <button ref={this.props.xxx}>dsd</button>;
  }
}

export default class Index extends Component {
  componentDidMount() {
    // console.log(this.ref, this.$ref);
  }
  render() {
    this.ref = React.createRef();
    return (
      <div>
        <FuncyButton xxx={e => (this.$ref = e)}>谢谢</FuncyButton>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
