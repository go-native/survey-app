import React, { Component } from 'react';
import { connect } from 'react-redux';
import SurveyDetails from '../components/SurveyDetails/SurveyDetails';
import { getSurvey, createCompletions } from '../actions';
import SuccessMessage from '../components/SuccessMessage/SuccessMessage';

class SurveyDetailsContainer extends Component {

  state = { showMessage: false }
  componentDidMount() {
    this.props.dispatch(getSurvey(this.props.match.params.survey_id))
  }

  sendAnswers = (answers) => {
    let completions = { completions: [] };
    for (let questionId in answers) {
      completions.completions.push({ question_id: questionId, value: answers[questionId] })
    }
    this.props.dispatch(createCompletions(this.props.selectedSurvey.id, completions)).then((res) => {
      this.setState({ showMessage: true })
    });
  }

  render() {
    if (!this.state.showMessage) {
      return <SurveyDetails sendAnswers={this.sendAnswers} survey={this.props.selectedSurvey} />
    } else {
      return <SuccessMessage />
    }
  }
}

const mapStateToProps = (state) => ({
  selectedSurvey: state.selectedSurvey
});

export default connect(
  mapStateToProps
)(SurveyDetailsContainer);