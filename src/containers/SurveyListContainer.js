import { connect } from 'react-redux';
import React, { Component } from 'react';
import { getSurveys } from '../actions';
import SurveyList from '../components/SurveyList/SurveyList';

class SurveyListContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getSurveys());
  }

  render() {
    return <SurveyList surveys={this.props.surveys}/>
  }
}

const mapStateToProps = (state) => ({
  surveys: state.allSurveys
});

export default connect(
  mapStateToProps
)(SurveyListContainer);