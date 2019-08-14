import React, { useState } from "react";
import SuperInput from "../../component/superInput";

export default class Inner extends React.Component {
  componentDidMount() {}
  componentDidUpdate() {
    console.log("update");
  }
  componentWillUnmount() {
    console.log("will UNMount age");
  }
  render() {
    return (
      <div>
        <Age />
      </div>
    );
  }
}

export function Age(props) {
  const [num, setNum] = useState(0);
  const [val, setVal] = useState("221");

  return (
    <div>
      <p>{num}</p>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        age
      </button>
      <hr />
      <SuperInput onChange={e => console.log(e.target.value)} />
    </div>
  );
}
