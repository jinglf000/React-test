import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Layout extends Component {
  render() {
    const { childern, location } = this.props;
    console.log(location);
    return (
      <div>
        <nav className="nav">
          <Link to="/" className="item">
            Index
          </Link>

          <Link to="/age" className="item">
            age
          </Link>
          <Link to="/age?name=12"> age nam = 12</Link>
          <Link to="/go/TOM"> go 汤姆</Link>
          <Link to="/go/JEM"> go JEM</Link>
          <Link to="/source"> 源码 </Link>
        </nav>

        <div>{childern}</div>
      </div>
    );
  }
}
