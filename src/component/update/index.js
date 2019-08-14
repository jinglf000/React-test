import React, { useState, Component } from "react";

export function Update() {
  const [name, setName] = useState("xiaomign");
  return (
    <>
      <p>{name}</p>
      <button
        onClick={() => {
          setName("hehe");
        }}
      >
        changeName
      </button>
    </>
  );
}

export default class UpdateClass extends Component {
  state = {
    name: "12"
  };
  componentDidUpdate() {
    console.log("updatge!!!!");
  }
  render() {
    const { name } = this.state;
    return (
      <>
        <p>{name}</p>
        <button
          onClick={() => {
            this.setState({ name: "12323" });
          }}
        >
          changeName
        </button>
      </>
    );
  }
}
