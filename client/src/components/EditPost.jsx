import React from 'react';
import { withRouter } from 'react-router-dom';

function EditPost(props) {
    return (
        <div className="create-form" >
        <h2>Edit Post</h2>
        <form onSubmit={props.newPost}>
            <p>Image:</p>
            <input
                type="text"
                name="image"
                placeholder="Copy image link"
                value={props.postForm.image}
                onChange={props.handleFormChange} />
            <p>Post title:</p>
            <input
                type="text"
                name="name"
                placeholder="Title"
                value={props.postForm.name}
                onChange={props.handleFormChange} />

            <input 
                type="text"
                name="category"
                placeholder="DROPDOWN HERE"
                value={props.postForm.category}
                onChange={props.handleFormChange} />

            <input
                type="text"
                name="price"
                placeholder="DROPDOWN HERE"
                value={props.postForm.price}
                onChange={props.handleFormChange} />

            <input
                type="text"
                name="content"
                placeholder="Description"
                value={props.postForm.content}
                onChange={props.handleFormChange} />

            <input
                type="text"
                name="contact"
                placeholder="Enter email"
                value={props.postForm.contact}
                onChange={props.handleFormChange} />    

            <button>Update</button>
        </form>
    </div > 
  )
}

export default withRouter(EditPost);
