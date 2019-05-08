import React, { Component } from 'react';
import { withRouter } from 'react-router';

class PostView extends Component {
    constructor(props){
        super(props)
        this.state={
            inputValue:""
        }
        this.handleChange=this.handleChange.bind(this)
    }
handleChange(e){
    this.setState({
        inputValue: e.target.value
    })
}

    render() {
        return (
          <div className="post-container">
          <input onChange={this.handleChange} value={this.state.inputValue} type='search' placeholder="Search"/>
         
            {this.props.posts && this.props.posts.filter(post => post.name.toUpperCase().includes(this.state.inputValue.toUpperCase())).map(post => (
              <div
                key={post.id}
                className="post-card"
                onClick={(e) => {
                    this.props.history.push(`/posts/${post.id}`)
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
                this.props.history.push('/new/post');
                window.scrollTo(0, 0);
              }}>
              <img
                alt="Create a post"
                src="https://image.flaticon.com/icons/png/512/14/14980.png"
                className="plus-sign" />
              <h3>Create a new post</h3>
            </div>
          </div>
        )
    }
}

export default withRouter(PostView)