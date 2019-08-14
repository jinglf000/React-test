/**
 * use protal to implement Modal
 */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.$el = document.createElement("div");
  }

  componentDidMount() {
    document.body.append(this.$el);
  }
  renderModal() {
    return (
      <div className="wrap">
        <div className="document">{this.props.children}</div>
      </div>
    );
  }
  render() {
    console.log(this.$el);
    return ReactDOM.createPortal(this.renderModal(), this.$el);
  }
}
// componentDidMount 意味着元素挂载到DOM上；这个DOM可能已经显示到页面上，
// 也可能只是在内存中;
// DOM和页面上的元素是一一对应的;只要DOM被创建了，
// 就会放在浏览器内存里无论是否挂载到页面上；

// 1、ReactDOM 提供的能够手动添加DOM的方式。
// 2、通常使用在Modal，脱了原有文档流中的内容；事件支持react层级的冒泡；
export default Modal;
