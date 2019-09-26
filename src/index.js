import React from "react";
import ReactDOM from "react-dom";
import ReactConfig from "./router";

// import InputDefaultValue from "./component/inputDefaultValue/index";
// import Customer from "./component/context/customer";
import context from "./component/context";
import Modal from "./component/protal/index";
import Update from "./component/update";
import Import from "./component/import";

import "./styles.css";
import history from "./component/history";

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
  state = { qq: nameObj, value: "12", visible: false, qqq: null };
  handleShowModal = () => {
    const { visible } = this.state;
    this.setState({
      visible: !visible
    });
  };
  componentDidMount() {
    console.log(this.state.qqq);
  }
  componentDidUpdate() {
    console.log(this.state.qqq);
  }

  render() {
    const { qq, value, visible, qqq } = this.state;
    return (
      <div className="App" onClick={this.handleOnclick}>
        <h2 ref={qqq}>APP - TEST</h2>
        <Tooltip />
        <br />
        <button onClick={this.handleShowModal}>show Modal</button>
        <span>{`${visible}`}</span>
        {visible && (
          <Modal>
            <p>这是一个MODAL 的内部</p>
          </Modal>
        )}
        <br />
        <button
          onClick={() => {
            history.push({ pathname: "/ges" });
          }}
        >
          go
        </button>
        <br />
        <Update />
      </div>
    );
  }
}

const test = <App>TEST</App>;
console.log(test);

const rootElement = document.getElementById("root");
ReactDOM.render(<ReactConfig />, rootElement);
