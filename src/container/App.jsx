import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Posts } from '../components/Posts/Posts';
import { PostForm } from '../components/PostForm/PostForm';
import { deletePost } from '../actions/deletePost';
import { addPost } from '../actions/addPost';
import { createPost } from '../actions/createPost';

import './App.css';

class App extends Component {
  render() {
    const { posts, emptyPost, deletePostAction, addPostAction } = this.props;
    return (
      <div className="App">
        <div className="blogPosts-container">
          <div className="posts-container">
            <Posts deletePost={deletePostAction} posts={posts} />
          </div>
          <div className="posts-form">
            <PostForm
              emptyPost={emptyPost}
              createPostAction={createPost}
              addPost={addPostAction}
              posts={posts}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    posts: store.posts,
    emptyPost: store.emptyPost,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePostAction: correctPostsList =>
      dispatch(deletePost(correctPostsList)),
    addPostAction: correctPostsList => dispatch(addPost(correctPostsList)),
    createPostAction: newPost => dispatch(createPost(newPost)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
