import React, { Component } from "react";

export default class navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <link class="navbar-brand" href="#">
              <img
                src="/docs/5.3/assets/brand/bootstrap-logo.svg"
                alt="Logo"
                width="30"
                height="24"
                class="d-inline-block align-text-top"
              />
              BMI Calculator
            </link>
          </div>
        </nav>
      </div>
    );
  }
}
