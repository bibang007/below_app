import React, { Component } from 'react';
import EditPost from './EditPost'
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

class PostView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false
    }
  }

  componentDidMount() {
    this.props.mountEditForm(this.props.id);
  }

  render() {
    const { post } = this.props;
    return (
      <div className="post-page">
        {post === undefined ? <h2>Loading . . .</h2> : (
          <div>
            <img alt={post.name} src={post.image} />
            {this.state.isEdit ?
              <Route path={'/posts/:id/edit'} render={() => (
                <EditPost
                  handleFormChange={this.props.handleFormChange}
                  handleSubmit={(e) => {
                    e.preventDefault();
                    this.props.editPost();
                    this.setState({ isEdit: false })
                    this.props.history.push(`/posts/${this.props.postForm.id}`)
                  }}
                  postForm={this.props.postForm} />
              )} />
              :
              <>
                <h1>{post.name}</h1>
                {this.props.currentUser && (<>
                <button onClick={() => {
                  this.setState({
                    isEdit: true
                  })
                  this.props.history.push(`/posts/${post.id}/edit`)
                }}>Edit</button>
                <button onClick={() => {
                  this.props.deletePost(post.id);
                  this.props.history.push('/')
                }}>Delete</button>
                </>)}
              </>
            }
          </div>)}
      </div>)
  }
}

export default withRouter(PostView);