import React from 'react';
import ReactDOM from 'react-dom';
import ReactConfig from './router';

import context from './component/context';
import Modal from './component/protal/index';
import Update from './component/update';

import './styles.css';
import history from './component/history';

export function Hello(props) {
  return <div> 这是一个对props中更新obj的测试 </div>;
}

const nameObj = {
  qq: {
    hh: 1
  }
};

const { Tooltip } = context;

export class App extends React.Component {
  state = { qq: nameObj, value: '12', visible: false, qqq: null };
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
    const { visible, qqq } = this.state;
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
            history.push({ pathname: '/ges' });
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

const rootElement = document.getElementById('root');

ReactDOM.render(<ReactConfig />, rootElement);
