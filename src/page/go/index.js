import React, { useState, useEffect } from "react";

export default class Go extends React.Component {
  state = {
    value: 123
  };

  componentWillUnmount() {
    console.log("go unmount");
  }
  handleOnChange = e => {
    console.log("change ");
    this.setState({ value: e.target.value });
  };
  render() {
    const { value } = this.state;
    return (
      <div>
        {/* <CustomInputHooks value={value} onChange={this.handleOnChange} /> */}
        <CustomInputHooks />
      </div>
    );
  }
}

// 受控组件 和 非受控组件
class CustomInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || props.defaultValue || ""
    };
  }

  handleOnChange = e => {
    const { onChange } = this.props;

    if (!this.props.hasOwnProperty("value")) {
      this.setState({ value: e.target.value });
    }
    onChange && onChange(e);
  };
  static getDerivedStateFromProps(props) {
    if ("value" in props) {
      return { value: props.value };
    }
    return null;
  }

  render() {
    const { value } = this.state;
    return <input value={value} onChange={this.handleOnChange} />;
  }
}
// hooks 中的Controled Component and unControlled Component
const CustomInputHooks = ({ value, onChange, defaultValue }) => {
  const [val, setVal] = useState(value || defaultValue);
  const realVal = value !== void 0 ? value : val;
  const valChange = e => {
    if (value === void 0) {
      setVal(e.target.value);
    }
    onChange && onChange(e);
  };

  return <input value={realVal} onChange={valChange} />;
};
