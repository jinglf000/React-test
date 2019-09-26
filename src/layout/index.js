import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
export default class Layout extends Component {
  render() {
    const { childern } = this.props;
    return (
      <div className="wraps">
        <nav className="nav">
          <Link to="/" className="item">
            Index
          </Link>

          <Link to="/age" className="item">
            age
          </Link>
          <Link to="/age?name=12"> age nam = 12</Link>
          <Link to="/go/TOM"> go 汤姆</Link>
          <Link to="/hook">Hook</Link>
          <Link to="/interface">Interface</Link>
        </nav>

        <div>{childern}</div>
      </div>
    );
  }
}
