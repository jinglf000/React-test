import React from "react";

// context
const themes = {
  light: {
    backgroundColor: "#fff",
    color: "red"
  },
  dark: {
    backgroundColor: "#ccc",
    color: "#fff"
  }
};
// context and defaultValue
const themeContext = React.createContext(themes.light);

// customer Context
function ThemeButton() {
  return (
    <themeContext.Consumer>
      {value => <button style={{ ...value }}>Theme</button>}
    </themeContext.Consumer>
  );
}

export default class Tooltip extends React.Component {
  state = { theme: themes.light };

  handleClick = () => {
    this.setState({
      theme: this.state.theme === themes.light ? themes.dark : themes.light
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Theme change</button>
        <themeContext.Provider value={this.state.theme}>
          <ThemeButton />
        </themeContext.Provider>
        <ThemeButton />
      </div>
    );
  }
}
// 1、Context 是React 提供的一种能够无视嵌套层级的数据交换方式；
// 2、context 提供了一套符合React 规范的实现方式，defaultValue value 和组件（Provider Consumer）
