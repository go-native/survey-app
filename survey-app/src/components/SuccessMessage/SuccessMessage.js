import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SuccessMessage.css';

class SuccessMessage extends Component {
  render() {
    return (
      <div class="success-message">
        Thanks for answering the survey!
        <Link to='/'> Go to surveys</Link>
      </div>
    );
  }
}

export default SuccessMessage;