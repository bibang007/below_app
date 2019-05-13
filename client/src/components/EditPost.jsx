import React from 'react';
import { withRouter } from 'react-router-dom';
import editButton from '../../src/images/editButton.png' 

function EditPost(props) {
    return (
        <div className="create-form" >
        <h2>Edit Post</h2>
        <form onSubmit={props.handleSubmit}>
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

<select name="category" onChange={props.handleFormChange}>
                        <option defaultValue>Category</option>
                        <option value="Services">Services</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Automotive">Automotive</option>
                        <option value="Events">Events</option>
                    </select>

                    <select name="price" onChange={props.handleFormChange}>
                        <option defaultValue>Price</option>
                        <option value="$5000">$5000</option>
                        <option value="$500">$500</option>
                        <option value="$100">$100</option>
                        <option value="$50">$50</option>
                        <option value="$10">$10</option>
                    </select>

                    <select name="content" onChange={props.handleFormChange}>
                        <option defaultValue>Description</option>
                        <option value="New">New</option>
                        <option value="Great Condition">Great Condition</option>
                        <option value="Good">Good Condition</option>
                        <option value="Fair">Fair</option>
                    </select>

            <button><img className="editButton" src={editButton} /></button>
        </form>
    </div > 
  )
}

export default withRouter(EditPost);
