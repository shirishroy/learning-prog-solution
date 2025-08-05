import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      this.setState({ posts: data.slice(0, 10) }); // Limit to 10 for demo
    } catch (error) {
      this.setState({ error });
    }
  }

  componentDidCatch(error, info) {
    alert('An error occurred: ' + error.message);
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <h1>Posts</h1>
        {posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
