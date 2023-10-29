import React, { useState } from 'react';

function CreateQuestion() {
  const [questionData, setQuestionData] = useState({
    title: '',
    description: '',
    tags: '',
  });

  const handleQuestionChange = (e) => {
    setQuestionData({ ...questionData, [e.target.name]: e.target.value });
  };

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    // Handle question submission
    console.log('Question Data:', questionData);
    // Reset the form
    setQuestionData({
      title: '',
      description: '',
      tags: '',
    });
  };

  return (
    <div>
      <h1 className='question-create'>Create a Question</h1>
      <form onSubmit={handleQuestionSubmit}>
      <h3>Title:</h3>
        <label>
          <input
            type="text"
            name="title"
            value={questionData.title}
            onChange={handleQuestionChange}
          />
        </label>
        <h3>Describe the Problem:</h3>
        <label>
          <textarea
          
            name="description"
            className="prob"
            value={questionData.description}
            onChange={handleQuestionChange}
          />
        </label>
        <h3>Tags:</h3>
        <label>
          <input
            type="text"
            name="tags"
            value={questionData.tags}
            onChange={handleQuestionChange}
          />
        </label>
        <button type="submit">Post Question</button>
      </form>
    </div>
  );
}

export default CreateQuestion;
