import React, { useState } from 'react';
import './CreateArticle.css';

function CreateArticle() {
  const [articleData, setArticleData] = useState({
    title: '',
    abstract: '',
    articleText: '',
    tags: '',
  });

  const handleArticleChange = (e) => {
    setArticleData({ ...articleData, [e.target.name]: e.target.value });
  };

  const handleArticleSubmit = (e) => {
    e.preventDefault();
    // Handle article submission
    console.log('Article Data:', articleData);
    // Reset the form
    setArticleData({
      title: '',
      abstract: '',
      articleText: '',
      tags: '',
    });
  };

  return (
    <div>
      <h1 className ="question-create">Create an Article</h1>
      <form onSubmit={handleArticleSubmit}>
        <h3>Title:</h3>
        <label>

          <input
            type="text"
            name="title"
            value={articleData.title}
            onChange={handleArticleChange}
          />
        </label>
        <h3>Abstract:</h3>
        <label>

          <textarea
            name="abstract"
            className="abstract"
            value={articleData.abstract}
            onChange={handleArticleChange}
          />
        </label>
        <h3>Article Text:</h3>
        <label>

          <textarea
            name="articleText"
            className="abstract-text"
            value={articleData.articleText}
            onChange={handleArticleChange}
          />
        </label>
        <h3>Tags:</h3>
        <label>
  
          <input
            type="text"
            name="tags"
            value={articleData.tags}
            onChange={handleArticleChange}
          />
        </label>
        <button type="submit">Post Article</button>
      </form>
    </div>
  );
}

export default CreateArticle;
