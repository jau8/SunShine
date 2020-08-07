/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import styled from 'styled-components';

class CustomCheckbox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      is_checked: props.isChecked ? true : false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ is_checked: !this.state.is_checked });
  }

  render() {
    const { isChecked, number, label, inline, ...rest } = this.props;

    const classes =
      inline !== undefined ? "checkbox checkbox-inline" : "checkbox";

    const hoverDiv = styled.div`
      margin: 40px;
      border: 5px pink;
      &:hover {
       background-color: yellow;
     }
    `;

    return (
      <hoverDiv className={classes}>
        <input
          id={number}
          type="checkbox"
          onChange={this.handleClick}
          checked={this.state.is_checked}
          {...rest}
        />
        <label htmlFor={number}>
          {label} <i class="fa fa-sign-in" />
        </label>
      </hoverDiv>
    );
  }
}

export default CustomCheckbox;
