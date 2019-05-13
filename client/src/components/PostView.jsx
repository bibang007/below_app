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
          <input className="search-field" onChange={this.handleChange} value={this.state.inputValue} type='search' placeholder="Search"/>
            {this.props.posts && this.props.posts.filter(post => {
                return post.name.toUpperCase().includes(this.state.inputValue.toUpperCase())
            }).map(post => (
              <div
                key={post.id}
                className="post-card"
                onClick={(e) => {
                    this.props.history.push(`/posts/${post.id}`)
                    window.scrollTo(0, 0);
                }}>
                <div className="posts">
                    <img className='testImage'alt={post.name} src={post.image} />
                    <div className="description">
                        <h3>
                        <p>{post.name}</p>
                        </h3>
                        <h3>
                        {post.category}
                            </h3>
                        <h3>
                            {post.price}

                        </h3>
                        <h3>
                            {post.content}
                        </h3>
                        {/* <h3>
                            {post.contact}    
                        </h3> */}
                    </div>
                </div>
              </div>
            ))}
            {/* <div
              className="post-card"
              onClick={() => {
                this.props.history.push('/new/post');
                window.scrollTo(0, 0);
              }}>
              <img
                alt="Create a post"
                src="https://image.flaticon.com/icons/png/512/14/14980.png"
                className="plus-sign" />
            </div> */}
          </div>
        )
    }
}

export default withRouter(PostView)