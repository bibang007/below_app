import React from 'react';
import { withRouter } from 'react-router-dom';

function CreatePost(props) {
  return (
    <div className="create-form" >
      <h2>Create a new post</h2>
      <form onSubmit={props.newPost}>
        <p>Image Link:</p>
        <input
          type="text"
          name="image"
          value={props.postForm.image}
          onChange={props.handleFormChange} />
          <p>Post title:</p>
        <input
          type="text"
          name="name"
          value={props.PostForm.name}
          onChange={props.handleFormChange} />
        <button>Submit</button>
      </form>
    </div >
  )
}

export default withRouter(CreatePost);
