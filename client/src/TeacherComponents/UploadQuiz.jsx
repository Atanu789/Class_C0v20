import React, { useState } from 'react'; 
import './Upload.css';



const QuestionUpload = ({ onQuestionUpload }) => {
  const [questions, setQuestions] = useState([
    { question: '', options: ['', '', '', ''], correctAnswer: '' },
  ]);

  const handleAddQuestion = () => {
    setQuestions(prevQuestions => [
      ...prevQuestions,
      { question: '', options: ['', '', '', ''], correctAnswer: '' },
    ]);
  };

  const handleQuestionChange = (index, field, value) => {
    setQuestions(prevQuestions => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index][field] = value;
      return updatedQuestions;
    });
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    setQuestions(prevQuestions => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[questionIndex].options[optionIndex] = value;
      return updatedQuestions;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onQuestionUpload(questions);
  };

  return (
    <div className="question-upload-container">
      <h2 className="upload-header">Upload Questions</h2>
      <form className="question-form" onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={index} className="question">
            <label className="question-label">
              Question {index + 1}:
              <input
                type="text"
                value={question.question}
                className="question-input"
                onChange={e => handleQuestionChange(index, 'question', e.target.value)}
              />
            </label>
            <br />
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex} className="option">
                <label className="option-label">
                  Option {optionIndex + 1}:
                  <input
                    type="text"
                    value={option}
                    className="option-input"
                    onChange={e => handleOptionChange(index, optionIndex, e.target.value)}
                  />
                </label>
              </div>
            ))}
            <label className="answer-label">
              Correct Answer:
              <input
                type="text"
                value={question.correctAnswer}
                className="answer-input"
                onChange={e => handleQuestionChange(index, 'correctAnswer', e.target.value)}
              />
            </label>
            <br />
          </div>
        ))}
        <button type="button" onClick={handleAddQuestion} className="add-question-btn">Add Question</button>
        <button type="submit" className="submit-btn">Upload</button>
      </form>
    </div>
  );
};

export default QuestionUpload;