import React from 'react';

const blogs = [
  { title: 'Getting Started with React', date: '2025-08-01' },
  { title: 'Why You Should Learn JSX', date: '2025-07-28' },
];

const BlogDetails = () => {
  return (
    <div>
      <h2>📰 Blog Details</h2>
      <ul>
        {blogs.map((blog, i) => (
          <li key={i}>
            <strong>{blog.title}</strong> — {blog.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogDetails;
