import React from "react";

const obj = {
  hello: "12",
  age: "12",
  name: "xxxxx"
};

const ThemeContext = React.createContext(obj);

class Context extends React.Component {
  state = {
    obj: {}
  };

  handleClick = () => {
    this.setState({
      obj: {
        hello: Math.random(),
        age: "13",
        name: "obj"
      }
    });
  };
  render() {
    const obj = this.state.obj;
    return (
      <ThemeContext.Provider value={obj}>
        <Toolbar />
        <button onClick={this.handleClick}>click</button>
      </ThemeContext.Provider>
    );
  }
}

//
function Toolbar(props) {
  return (
    <div>
      <ThemeButton />
    </div>
  );
}

class ThemeButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    console.log(this.context);
    const obj = this.context;
    return <p theme={this.context}>{obj.hello}</p>;
  }
}

export default Context;
// Context .Provider
// static contextType Context
