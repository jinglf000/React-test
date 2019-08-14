import React, { Component } from "react";

export default class SuperInput extends Component {
  constructor(props) {
    super(props);
    const { value, defaultValue } = props;
    this.state = {
      value: value !== void 0 ? value : defaultValue || ""
    };
  }
  handleOnChange = e => {
    const { value, onChange } = this.props;
    onChange(e);
    if (value === void 0) {
      this.setState({ value: e.target.value });
    }
  };
  componentDidUpdate(prevProps) {
    const { value } = this.props;
    if (value !== prevProps.value) {
      this.setState({ value });
    }
  }
  render() {
    const { value } = this.state;
    return <input value={value} onChange={this.handleOnChange} />;
  }
}
