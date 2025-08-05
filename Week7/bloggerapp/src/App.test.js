import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [view, setView] = useState('book');

  let renderedComponent;
  if (view === 'book') {
    renderedComponent = <BookDetails />;
  } else if (view === 'blog') {
    renderedComponent = <BlogDetails />;
  } else {
    renderedComponent = <CourseDetails />;
  }

  return (
    <div>
      <h1>📝 Blogger App</h1>
      <div>
        <button onClick={() => setView('book')}>Book</button>
        <button onClick={() => setView('blog')}>Blog</button>
        <button onClick={() => setView('course')}>Course</button>
      </div>
      <hr />
      {renderedComponent}
    </div>
  );
}

export default App;
