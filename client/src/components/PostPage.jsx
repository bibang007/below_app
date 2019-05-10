import React, { Component } from 'react';
import EditPost from './EditPost'
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import deleteButton from '../../src/images/delete.png' 
import editButton from '../../src/images/editButton.png' 

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
            <img className="imagePost" alt={post.name} src={post.image} />
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
                <h3>
                        {post.category}
                            </h3>
                        <h3>
                            {post.price}

                        </h3>
                        <h3>
                            {post.content}
                        </h3>
                {this.props.currentUser && (<>
                <div className='postButton'>
                <div className='editButton' onClick={() => {
                  this.setState({
                    isEdit: true
                  })
                  this.props.history.push(`/posts/${post.id}/edit`)
                }}><img className="editButton" src={editButton} /></div>
                <div className='deleteButton' onClick={() => {
                  this.props.deletePost(post.id);
                  this.props.history.push('/')
                }}><img className="deleteButton" src={deleteButton} /></div>
                </div>
                </>)}
              </>
              
            }
          </div>)}
      </div>)
  }
}

export default withRouter(PostView);