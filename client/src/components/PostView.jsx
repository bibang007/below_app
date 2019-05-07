import React from 'react';
import { withRouter } from 'react-router';

function PostView(props) {
  return (
    <div className="post-container">
      {props.posts.map(post => (
        <div
          key={post.id}
          className="post-card"
          onClick={(e) => {
            debugger;
            props.history.push(`/posts/${post.id}`);
            window.scrollTo(0, 0);
          }}>
          <img alt={post.name} src={post.image} />
          <h3>
            <p>{post.name}</p>
          </h3>
        </div>
      ))}
      <div
        className="post-card"
        onClick={() => {
          props.history.push('/new/post');
          window.scrollTo(0, 0);
        }}>
        <img
          alt="Create a post"
          src="https://image.flaticon.com/icons/png/512/14/14980.png"
          className="plus-sign" />
        <h3>Create a new teacher</h3>
      </div>
    </div>
  )
}

export default withRouter(PostView)