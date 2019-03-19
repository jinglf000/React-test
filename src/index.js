import React from "react";
import ReactDOM from "react-dom";

// import InputDefaultValue from "./component/inputDefaultValue/index";
// import Customer from "./component/context/customer";
import context from "./component/context";
import Modal from "./component/protal/index";

import "./styles.css";

function Hello(props) {
  return <div> 这是一个对props中更新obj的测试 </div>;
}

const nameObj = {
  qq: {
    hh: 1
  }
};

const { Tooltip } = context;

class App extends React.Component {
  state = { qq: nameObj, value: "12", visible: false };
  handleShowModal = () => {
    const { visible } = this.state;
    this.setState({
      visible: !visible
    });
  };
  render() {
    const { qq, value, visible } = this.state;
    return (
      <div className="App" onClick={this.handleOnclick}>
        <h2>APP - TEST</h2>
        <Tooltip />
        <br />
        <button onClick={this.handleShowModal}>show Modal</button>
        <span>{`${visible}`}</span>
        {visible && (
          <Modal>
            <p>这是一个MODAL 的内部</p>
          </Modal>
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
