import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Home.module.css";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hello, Please select the design you want to view!</h1>
        <h2>
          <a href="/product-form" target="_blank">
            Product Submission Form
          </a>
        </h2>
      </div>
    );
  }
}

export default Home;
