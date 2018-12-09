import React, { Component } from 'react';
import './postForm.css';

export class PostForm extends Component {
  handleChange = e => {
    let { value, name } = e.target;

    if (value !== '') {
      let emptyPost = this.props.emptyPost;
      console.log(this.props.emptyPost);
      let newPost = Object.assign(emptyPost, { [name]: value });

      this.props.createPostAction(newPost);
    }
  };

  submittingPostForm = e => {
    e.preventDefault();

    let post = this.props.emptyPost;
    let postWithId = Object.assign(post, { id: Date.now() });

    const posts = this.props.posts.posts;
    posts.push(postWithId);

    this.props.addPost(posts);

    this.myFormRef.reset();
  };

  render() {
    return (
      <form
        className="postsForm"
        onSubmit={e => this.submittingPostForm(e)}
        ref={el => (this.myFormRef = el)}
      >
        <p className="postsForm__title">Create your NEW post</p>
        <div className="postsForm__inputs-wrp">
          <input
            onChange={this.handleChange}
            placeholder="Enter a title of post"
            name="title"
          />
          <input
            onChange={this.handleChange}
            placeholder="Enter a link on image"
            name="img"
          />
        </div>
        <textarea
          onChange={this.handleChange}
          placeholder="type text of your post"
          name="text"
        />
        <input className="postsForm__btn" type="submit" value="to post!" />
      </form>
    );
  }
}
