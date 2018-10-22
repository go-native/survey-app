import React, { Component } from 'react';
import './Question.css';

class Question extends Component {

  state = { selectedQuestion: "" }

  handleAnswerChange = (event) => {
    this.setState({ selectedQuestion: event.target.value });
    this.props.onChange(this.props.question.id, event.target.value);
  }
  render() {
    return (
      <div className="question">
        <div className="question__text">{this.props.question.title}</div>
        <div className="question__answers">
          {
            this.props.question.options.map(option =>
              <div key={option}><input onChange={this.handleAnswerChange} type="radio" checked={this.state.selectedQuestion === option} value={option} /> {option} </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default Question;