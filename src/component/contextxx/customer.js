import React from "react";

const context = React.createContext({ name: "xxxx" });

class Customer extends React.Component {
  state = {
    name: "wabg"
  };
  handleClick = () => {
    this.setState({ name: Math.random() });
  };
  render() {
    return (
      <div>
        <p onClick={this.handleClick}>123435</p>
        <Theme />
      </div>
    );
  }
  renders() {
    return (
      <context.Provider value={{ name: this.state.name }}>
        <p onClick={this.handleClick}>123435</p>
        <Theme />
      </context.Provider>
    );
  }
}

function Theme() {
  return (
    <div className="">
      <span>theme</span>
      <context.Consumer>{(obj = {}) => <p>{obj.name}</p>}</context.Consumer>
    </div>
  );
}

export default Customer;
