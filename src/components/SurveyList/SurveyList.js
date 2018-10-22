import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SurveyTile from '../SurveyTile/SurveyTile'
import './SurveyList.css';

class SurveyList extends Component {

  renderTiles() {
    return (this.props.surveys.map(s =>
      <Link key={s.id} to={`${s.id}`} >
        <SurveyTile survey={s} />
      </Link>
    ))
  }

  render() {
    return (
      <div className="surveys-list">
        {this.renderTiles()}
      </div>
    );
  }
}

export default SurveyList;