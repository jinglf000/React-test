import React, { Component } from "react";

class Source extends Component {
  state = {
    flag: true
  };
  render() {
    const { flag } = this.state;
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ flag: !flag });
          }}
        >
          CLICK
        </button>
        {flag ? <One /> : <Two />}
      </div>
    );
  }
}
function Base() {
  return <div>BASE component embbed in </div>;
}
class One extends Component {
  componentDidMount() {
    console.log("One is Mounted");
  }
  componentWillUnmount() {
    console.log("One is UnMounted");
  }
  render() {
    return <Base />;
  }
}

class Two extends Component {
  componentDidMount() {
    console.log("Two is Mounted");
  }
  componentWillUnmount() {
    console.log("Two is UnMounted");
  }
  render() {
    return <Base />;
  }
}

export default Source;
