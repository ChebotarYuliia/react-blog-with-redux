import React, { Component } from 'react';
import './posts.css';

export class Posts extends Component {
  constructor() {
    super();
    this.displayPost = this.displayPost.bind(this);
  }
  displayPost = post => {
    return (
      <div className="post-item" key={post.id}>
        <p className="post-item__title">{post.title}</p>
        <img className="post-item__img" src={post.img} alt={post.title} />
        <p className="post-item__text">{post.text}</p>
        <div
          className="delete-post-btn"
          onClick={() => this.deletePost(post.id)}
        >
          Delete Post
        </div>
      </div>
    );
  };

  deletePost = id => {
    let filteredPosts = this.props.posts.posts.filter(function(item) {
      return item.id !== id;
    });

    this.props.deletePost(filteredPosts);
  };

  render() {
    let posts = this.props.posts.posts;
    let createdPosts = posts.map(this.displayPost);

    return (
      <div className="blogPosts-container">
        <div className="posts-container">{createdPosts}</div>
      </div>
    );
  }
}
