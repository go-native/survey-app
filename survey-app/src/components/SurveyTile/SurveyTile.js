import React, { Component } from 'react';
import './SurveyTile.css';

class SurveyTile extends Component {
  render() {
    return (
      <div className="survey-tile">
        <div className="survey-tile__title">{this.props.survey.title}</div>
        <div className="survey-tile__body">{this.props.survey.tagline}</div>
      </div>
    );
  }
}

export default SurveyTile;