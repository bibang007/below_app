import React from 'react';
import { withRouter } from 'react-router-dom';

function CreatePost(props) {
    return (
        <div className="create-form" >
            <h2>Create a new post</h2>
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
                    placeholder="BOOTSTRAP HERE"
                    value={props.postForm.category}
                    onChange={props.handleFormChange} />

                <input
                    type="text"
                    name="price"
                    placeholder="BOOTSTRAP HERE"
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

                <button>Submit</button>
            </form>
        </div >
    )
}

export default withRouter(CreatePost);
