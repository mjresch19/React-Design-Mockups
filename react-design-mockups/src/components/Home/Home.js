import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
      </div>
    );
  }
}

export default Home;