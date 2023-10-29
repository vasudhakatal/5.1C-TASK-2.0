import React, { useState } from 'react';
import CreateQuestion from './CreateQuestion';
import CreateArticle from './CreateArticle';
import './App.css';

function App() {
  const [selectedPostType, setSelectedPostType] = useState('question');

  return (
    <div>
      <div className='new-post'>
      <h1>New Post</h1>
      </div>
      <div className='heading'>
      <h1>What do you want or Share</h1>
      </div>
      <div className='Select-type'>
      <label>
        <h1>Select Post Type:</h1>
        <select
          value={selectedPostType}
          onChange={(e) => setSelectedPostType(e.target.value)}
        >
          <option value="question">Question</option>
          <option value="article">Article</option>
        </select>
      </label>
      {selectedPostType === 'question' ? <CreateQuestion /> : <CreateArticle />}
      </div> 
    </div>
  );
}

export default App;
