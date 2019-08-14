import React, { forwardRef, Component, useRef } from "react";
import { render } from "react-dom";

const FuncyButton = props => {
  const obj = useRef("12");
  console.log(obj);
  return <button ref={obj}>{props.children}</button>;
};

class FButton extends Component {
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
      </div>
    );
  }
}
