import React, { Component } from 'react';
import { connect } from 'react-redux';

class AvailableCard extends Component {

  renderAvailableQuestions() {
    const questions = this.props.questionList;
    var available_questions = [];
    const isLoggedIn = this.props.questionList[0].answered;

    available_questions = filterAvailableQuestions(questions);

    return available_questions.map((question) => {
      return (
        <div className="col s12 m7"key={question.description}>
          <h2 className="header">{question.title}</h2>
          <div className="card horizontal">
            <div className="card-stacked">
              <div className="card-content">
                <p>{question.description}</p>
              </div>
              <div>
                {this.checkIfAnswered(question) }
              </div>
              <answeredQuestion />
            </div>
          </div>
        </div>
      );
    });
  }


  render() {
    return (
      <div>
        {this.renderAvailableQuestions()}
      </div>
    );
  }

  renderIcon(){
    console.log("came here")
    return(
      <div>Function called</div>
    )
  }

  answeredQuestion(props) {
    return(
      <div className="card-action">
        <a href="#">Ver respostas certas</a>
      </div>
    );
  }

  unansweredQuestion(props) {
    return(
      <div className="card-action">
        <a href="#">Responder Questionário</a>
      </div>
    );
  }

  checkIfAnswered(question) {
    if (question.answered) {
      return <this.answeredQuestion />;
    }else{
      // nothing to do
    }
    return <this.unansweredQuestion />;
  }
}

function mapStateToProps(state) {
  return {
    questionList: state.questionList,
  };
}

function filterAvailableQuestions (allQuestions) {
  var available_questions = [];

  allQuestions.map((question) => {
    if (question.available) {
      available_questions.push(question);
    }
  })

  return available_questions;
}

AvailableCard.propTypes = {
  questionList: React.PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(AvailableCard);
