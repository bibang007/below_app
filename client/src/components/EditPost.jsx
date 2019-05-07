import React from 'react';
import { withRouter } from 'react-router-dom';

function EditPost(props) {
  return (
    <div>
      <h3>Create a new post</h3>
      <form onSubmit={props.handleSubmit}>
        <p>Image Link:</p>
        <input
          type="text"
          name="photo"
          value={props.postForm.image}
          onChange={props.handleFormChange} />
        <p>Post title:</p>

        <input
          type="text"
          name="name"
          value={props.postForm.name}
          onChange={props.handleFormChange} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default withRouter(EditPost);
