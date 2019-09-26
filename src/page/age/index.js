import React, { useState, PureComponent } from "react";
import SuperInput from "../../component/superInput";

export default class Inner extends React.Component {
  componentDidMount() {}
  componentDidUpdate() {
    console.log('update');
  }
  componentWillUnmount() {
    console.log('will UNMount age');
  }
  render() {
    return (
      <div>
        <Age />
        <Go />
      </div>
    );
  }
}

export function Age(props) {
  const [num, setNum] = useState(0);

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
      <button
        onClick={() => {
          console.log(123);
          ming.go();
        }}
      >
        catch
      </button>
      <hr />
      <SuperInput onChange={e => console.log(e.target.value)} />
    </div>
  );
}

class Go extends PureComponent {
  componentDidMount() {
    console.log(this);
  }
  render() {
    return <div> GO PureComponent </div>;
  }
}
