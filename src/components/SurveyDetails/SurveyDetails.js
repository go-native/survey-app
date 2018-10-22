import React, { Component, Fragment } from 'react';
import Question from '../Question/Question';
import './SurveyDetails.css';

class SurveyDetails extends Component {
  answers = {}
  sendAnswers = () => {
    this.props.sendAnswers(this.answers);
  }

  populateAnswers = (questionId, answer) => {
    this.answers[questionId] = answer;
  }

  renderHeaders() {
    return (
      <Fragment><div className="survey-details__header">
        {this.props.survey.title}
      </div>
        <div className="survey-details__subheader">
          {this.props.survey.tagline}
        </div>
      </Fragment>
    )
  }

  renderQuestions() {
    return (
      <div className="questions-cnt">
        {
          this.props.survey.questions.map(q => <Question key={q.id} question={q} onChange={this.populateAnswers} />)
        }
      </div>
    )
  }

  render() {
    if (!this.props.survey) return null;
    return (
      <div className="survey-details">
        {this.renderHeaders()}
        {this.renderQuestions()}
        <div>
          <button onClick={this.sendAnswers} className="survey-details__send">Send</button>
        </div>
      </div>
    );
  }
}

export default SurveyDetails;